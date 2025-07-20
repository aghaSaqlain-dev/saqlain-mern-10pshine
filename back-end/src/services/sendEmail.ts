import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'apikey', // this is the literal string 'apikey'
            pass: process.env.SENDGRID_API_KEY,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
    };

    await transporter.sendMail(mailOptions);
}