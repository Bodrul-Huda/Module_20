import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function GET(req, res) {
  cookies().delete("token");

  return NextResponse.redirect(new URL("/", req.url));
}
