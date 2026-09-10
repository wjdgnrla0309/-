type ContactRequest = {
  body?: {
    name?: unknown;
    organization?: unknown;
    email?: unknown;
    message?: unknown;
  };
  method?: string;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(request: ContactRequest, response: ApiResponse) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const name = asText(request.body?.name);
  const organization = asText(request.body?.organization);
  const email = asText(request.body?.email);
  const message = asText(request.body?.message);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !organization || !emailPattern.test(email) || !message) {
    response.status(400).json({ error: "Invalid contact form data" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    response.status(503).json({ error: "Contact email service is not configured" });
    return;
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[KUMA 문의] ${organization} - ${name}`,
        text: `성함 / 담당자명: ${name}\n소속 기업 / 기관: ${organization}\n회신 이메일: ${email}\n\n문의 내용:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      response.status(502).json({ error: "Unable to send contact email" });
      return;
    }

    response.status(200).json({ ok: true });
  } catch {
    response.status(502).json({ error: "Unable to send contact email" });
  }
}