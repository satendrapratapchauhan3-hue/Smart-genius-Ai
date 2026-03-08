const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, template, data }) => {
    try {
        // Create a mock transporter for development
        // In production, use real SMTP configuration
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
            port: process.env.EMAIL_PORT || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        console.log(`Sending email to ${to} with subject: ${subject}`);
        console.log(`Template: ${template}`, data);

        // If using ethereal.email, this will log the preview URL
        // let info = await transporter.sendMail({
        //   from: '"AgentForge AI" <noreply@agentforge.ai>',
        //   to,
        //   subject,
        //   text: `Hello, this is a mock email for ${template}`,
        //   html: `<b>Hello!</b> This is a mock email for ${template}`
        // });

        return true;
    } catch (error) {
        console.error('Send email error:', error);
        return false;
    }
};

module.exports = { sendEmail };
