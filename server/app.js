const express = require('express');
const contactsRouter = require('./routers/contacts.router/contacts.router');
const socialsRouter = require('./routers/socials/socials.router');
const messagesRouter = require('./routers/messages/messages.router');
const faqsRouter = require('./routers/faqs/faqs.router');
const cors = require('cors');
const volunteersRouter = require('./routers/volunteers/volunteers.router');
const cookieParser = require('cookie-parser');
const dashboardRouter = require('./routers/dashboard/dashboard.router');
const adminLoginHandler = require('./controllers/login.controller');
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

app.use(cookieParser());

app.use("/contacts",contactsRouter)
app.use("/socials", socialsRouter);
app.use("/messages",messagesRouter)
app.use("/faqs",faqsRouter)
app.use("/volunteers", volunteersRouter)

app.use("/adm/dashboard", dashboardRouter);

app.post("/adm/login",adminLoginHandler )

app.post("/adm/logout",  (req, res) => {
  try {
    res.clearCookie("access", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.json({ message: "Logged out" });
  } catch (e) {
    console.log("Error during logout:", e);
  }
});

module.exports = app