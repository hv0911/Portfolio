import { createTransport } from "nodemailer"

export const sendMail = async (userMessage) => {

    const transporter = createTransport({
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.SMPT_USER,
        to: process.env.SMPT_USER,
        subject: `CONTACT REQUEST(${userMessage.message}) FROM PORTFOLIO `,
        text: userMessage.message,
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ message: 'Email sent successfully', info });
    });

}