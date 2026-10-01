import { useEffect, useState } from "react";
import { INSTAGRAM_FEED, INSTAGRAM_URL, type InstagramPost } from "../data/siteContent";

export function InstagramFeedSection() {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_FEED);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/instagram")
      .then((response) => {
        if (!response.ok) throw new Error("Instagram feed request failed");
        return response.json() as Promise<{ posts: InstagramPost[] }>;
      })
      .then((data) => {
        if (isMounted && data.posts.length > 0) setPosts(data.posts);
      })
      .catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="border-t border-zinc-800 bg-zinc-950 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Follow KUMA</span>
          <h2 className="text-3xl font-black tracking-[-0.06em] text-white mt-1">Instagram Feed</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-racing-green hover:text-racing-blue transition-colors"
        >
          <span aria-hidden="true">◎</span> @fs_team_kuma
        </a>
      </div>
      <div className="instagram-marquee" aria-label="KUMA Instagram 피드">
        <div className="instagram-track">
          {[...posts, ...posts].map((post, index) => (
            <a
              key={`${post.id}-${index}`}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="instagram-tile group"
              aria-label={`${post.label} 인스타그램 게시물 보기`}
            >
              <img src={post.image} alt={post.label} loading="lazy" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {post.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
