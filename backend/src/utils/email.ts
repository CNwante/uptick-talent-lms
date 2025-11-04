import { Resend } from "resend";
import dotenv from 'dotenv'

dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendApplicationEmail = async (to: string, name: string) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return false;
  }
  try {
    const { data, error } = await resend.emails.send({
      from: "Uptick Talent <no-reply@upticktalent.africa>",
      to: [to],
      subject: "We Received Your Application!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
          <h2 style="color: #1a73e8;">Hi ${name},</h2>
          <p>Thank you for applying to <strong>Uptick Talent</strong>!</p>
          <p>We've received your application and our team is reviewing it.</p>
          <p>You'll hear back from us within <strong>3–5 business days</strong>.</p>
          <hr>
          <p><em>— The Uptick Team</em></p>
        </div>
      `,
    });

    if (error) {
      console.error("Email failed:", error);
      return false;
    }

    console.log("Email sent:", data?.id);
    return true;
  } catch (error:any) {
    console.error("Email failed:", error.message || error);
    return false;
  }
};
