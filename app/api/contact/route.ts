import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const required = ["name", "email", "company", "message"];
  if (required.some((field) => !body[field]?.trim())) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Integration point: forward validated submissions to your CRM, email service,
  // or serverless function. No personal data is stored by this placeholder route.
  return NextResponse.json({ ok: true });
}
