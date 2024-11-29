import { NextResponse } from "next/server";

// Remove the dynamic directive
// export const dynamic = "force-dynamic";

// Refactor to provide a static response
export function GET() {
  return NextResponse.json({ data: "This is a static response for testing." });
}
