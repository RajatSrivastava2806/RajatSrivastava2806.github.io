const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    console.log("Data is", user)
    sendMail(user, info => {
        console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: details.email,
            pass: details.password
        }
    });

    let mailOptions = {
        from: user.email, // sender address
        to: 'rajatsriivastava@gmail.com', // list of receivers
        subject: "Message from portfolio", // Subject line
        html: `<h3>Hi This is ${user.fullName }</h1><br>
    <h5> Email: ${user.email}<h5>
    <h5> Mobile: ${user.mobile}<h5>
    <h5> Comment: ${user.comment}<h5>`
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
}

// main().catch(console.error);