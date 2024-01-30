import { Resend } from "resend";

export async function getInTouch(name: string, email: string, text: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: `<${email}>`,
      to: ["markectodorovic@gmail.com"],
      subject: `${name}`,
      react: `${text}`,
    });
    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
