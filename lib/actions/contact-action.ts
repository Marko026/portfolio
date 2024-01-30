import { Resend } from "resend";

export async function getInTouch(name: string, email: string, text: string) {
  const resend = new Resend("re_P9Yt6yhn_NH4k8FtRpQNxhLy3QRMsAesz");
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
