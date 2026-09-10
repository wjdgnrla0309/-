type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

type InstagramResponse = {
  data?: InstagramMedia[];
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

export default async function handler(_request: unknown, response: ApiResponse) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    response.status(503).json({ error: "Instagram API is not configured" });
    return;
  }

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
  const apiUrl = new URL("https://graph.instagram.com/me/media");
  apiUrl.searchParams.set("fields", fields);
  apiUrl.searchParams.set("limit", "10");
  apiUrl.searchParams.set("access_token", accessToken);

  try {
    const apiResponse = await fetch(apiUrl);
    if (!apiResponse.ok) throw new Error(`Instagram API returned ${apiResponse.status}`);

    const payload = (await apiResponse.json()) as InstagramResponse;
    const posts = (payload.data ?? [])
      .map((post) => ({
        id: post.id,
        label: post.caption?.split("\n")[0] || "KUMA Racing Team",
        url: post.permalink,
        image: post.media_url || post.thumbnail_url || "",
      }))
      .filter((post) => post.image);

    response.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    response.status(200).json({ posts });
  } catch {
    response.status(502).json({ error: "Unable to load Instagram feed" });
  }
}
