const express = require('express');
const contactsRouter = require('./routers/contacts.router/contacts.router');
const socialsRouter = require('./routers/socials/socials.router');
const messagesRouter = require('./routers/messages/messages.router');
const faqsRouter = require('./routers/faqs/faqs.router');
const cors = require('cors');
const volunteersRouter = require('./routers/volunteers/volunteers.router');
const dashboardRouter = require('./routers/dashboard/dashboard.router');
const app = express();
app.use(cors())
app.use(express.json());


app.use("/contacts",contactsRouter)
app.use("/socials", socialsRouter);
app.use("/messages",messagesRouter)
app.use("/faqs",faqsRouter)
app.use("/volunteers", volunteersRouter)

app.use("/adm/dashboard", dashboardRouter);

module.exports = app