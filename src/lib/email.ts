import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, name: string) {
  await resend.emails.send({
    from: 'noreply@magimontessori.com',
    to,
    subject: `Welcome to MagiMontessori!`,
    html: `
      <h1>Welcome, ${name}!</h1>
      <p>Thanks for joining MagiMontessori. Personalized Montessori learning adventures for every child</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">Go to your dashboard →</a></p>
    `,
  });
}
