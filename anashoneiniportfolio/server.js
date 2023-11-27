const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; 
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
      user: 'aanas980@gmail.com',
      pass: 'eeko fqwq uvay shui',
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: 'aanas980@gmail.com', 
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    if(res.statusCode===200) console.log(mailOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
