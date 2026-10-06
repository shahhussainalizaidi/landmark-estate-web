import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100), email: z.string().email(), phone: z.string().max(30).optional(),
  intent: z.string().max(40), message: z.string().min(5).max(2000), website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  // TODO (CRM phase): save as Lead in the database and email the assigned agent via Resend.
  console.log("New lead:", parsed.data.email, parsed.data.intent);
  return NextResponse.json({ ok: true });
}
