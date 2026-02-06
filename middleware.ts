import { edgeAuth } from "@/lib/auth-edge";
import { NextResponse } from "next/server";

export default edgeAuth((_req) => {
  return NextResponse.next();
});
