import { cookieAuth } from "./app/utili/cookieAuth";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await cookieAuth(req);
  }
}
