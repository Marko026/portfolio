import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);

    const { name, email, text } = body;
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello Marko",
      react: `${name} ${text}`,
    });
    if (!data) return NextResponse.json({ error: "Something went wrong" });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
