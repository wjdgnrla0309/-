import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import contactHandler from "./api/contact.js";

function contactApiMiddleware(): Plugin {
  return {
    name: "contact-api-middleware",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response, next) => {
        if (request.method !== "POST") {
          next();
          return;
        }

        const chunks: Buffer[] = [];
        for await (const chunk of request) chunks.push(Buffer.from(chunk));

        let body: unknown;
        try {
          body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
        } catch {
          response.statusCode = 400;
          response.setHeader("Content-Type", "application/json");
          response.end(JSON.stringify({ error: "Invalid JSON body" }));
          return;
        }

        await contactHandler(
          {
            method: request.method,
            body: body as { name?: unknown; organization?: unknown; email?: unknown; message?: unknown },
          },
          {
            status(code: number) {
              response.statusCode = code;
              return this;
            },
            json(payload: unknown) {
              response.setHeader("Content-Type", "application/json");
              response.end(JSON.stringify(payload));
            },
          },
        );
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  const pagesBasePath = process.env.VITE_BASE_PATH?.replace(/\/+$/, "");

  return {
    base: pagesBasePath ? `${pagesBasePath}/` : "/",
    plugins: [react(), contactApiMiddleware()],
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  };
});
