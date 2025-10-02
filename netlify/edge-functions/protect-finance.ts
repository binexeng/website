// netlify/edge-functions/protect-finance.ts
import { createRemoteJWKSet, jwtVerify } from "https://deno.land/x/jose@v4.14.4/index.ts";

const PROJECT_ID = "binex-db107";
const ISSUER = `https://securetoken.google.com/${PROJECT_ID}`;
const AUDIENCE = PROJECT_ID;

const JWKS = createRemoteJWKSet(
  new URL("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com")
);

// Lê cookie simples
function getCookie(req: Request, name: string): string | null {
  const cookie = req.headers.get("cookie") || "";
  for (const p of cookie.split(/;\s*/)) {
    const [k, ...rest] = p.split("=");
    if (k === name) return rest.join("=");
  }
  return null;
}

export default async (req: Request, ctx: any) => {
  try {
    // ID token do Firebase que gravamos como 'fb' no login
    const token = getCookie(req, "fb");
    if (!token) throw new Error("no_token");

    const { payload } = await jwtVerify(token, JWKS, {
      issuer: ISSUER,
      audience: AUDIENCE,
    });

    // Espera roles = ["admin"] para liberar Financeiro
    const roles = (payload as any)?.roles || [];
    const isAdmin = Array.isArray(roles) && roles.includes("admin");
    if (!isAdmin) throw new Error("not_admin");

    return ctx.next(); // permitido → serve a página
  } catch {
    const url = new URL(req.url);
    return Response.redirect(`${url.origin}/sem-permissao.html`, 302);
  }
};
