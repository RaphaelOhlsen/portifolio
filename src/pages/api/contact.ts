import nodemailer from 'nodemailer';

const email = process.env.MAILADRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST,
  port: Number(process.env.MAILPORT),
  auth: {
    user: email,
    pass: emailPass
  }
});

const mailer = ({ senderMail, name, text }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${email}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, name, content } = req.body;
  if (!senderMail || !name || !content) {
    res.status(403).send('Missing fields');
    return;
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};
