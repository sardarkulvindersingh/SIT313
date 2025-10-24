const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const app = express();
const PORT = 3000;

// Mailgun setup
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// Handle form submission
app.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    const messageData = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: "Welcome to DEV@Deakin!",
        text: `Hi there! 🎉\n\nWelcome to DEV@Deakin. We're excited to have you on board.`,
        html: `
            <h2>Welcome to DEV@Deakin! 🎉</h2>
            <p>Thank you for subscribing! We're glad to have you with us.</p>
            <p>Stay tuned for exciting updates and opportunities.</p>
        `
    };

    try {
        await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);
        console.log(`Welcome email sent to ${email}`);
        res.send(`<h3>Welcome email sent to ${email}</h3><a href="/">Go Back</a>`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email. Please try again.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
