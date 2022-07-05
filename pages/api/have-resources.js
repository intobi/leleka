import { SMTPClient } from 'emailjs'

const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD_EMAIL,
    host: 'smtp.gmail.com',
    ssl:true
});

export default function handler(req, res) {
    if (req.method === 'POST') {

        try {
            client.send(
                {
                    text: `Just for testing purpose`,
                    from: process.env.EMAIL,
                    to: process.env.TO_EMAIL,
                    subject: 'testing emailjs',
                }
            )
        } catch (e) {

        }

        res.status(200).json(req.body)
    }
}
