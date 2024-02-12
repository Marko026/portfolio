import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: any) {
  try {
    const body = await request.json();

    const { name, email, text } = body;

    const emailResponse = await resend.emails.send({
      from: `${name} <onboarding@resend.dev> `,
      to: [`markectodorovic@gmail.com`],
      subject: `Hello from ${name}`,
      react: `${text} ${email}`,
    });

    if (!emailResponse) {
      return NextResponse.json({ error: "Something went wrong" });
    }

    return NextResponse.json({ data: emailResponse });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
