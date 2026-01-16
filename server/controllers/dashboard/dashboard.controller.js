const { eq } = require("drizzle-orm");
const db = require("../../db/db");
const { faqsTable,messagesTable,volunteersTable } = require("../../modals/schema");


const getDashboardData = async (req, res) => {
    //send back messages count, unread messages count , volunteers count, pending volunteers, faqs count

    try {
        const messagesCount = await db.select().from(messagesTable);
        const unreadMessagesCount = await db.select().from(messagesTable).where(eq(messagesTable.read, false));
        const volunteersCount = await db.select().from(volunteersTable);
        const pendingVolunteers = await db.select().from(volunteersTable).where(eq(volunteersTable.status, "pending"));
        const faqsCount = await db.select().from(faqsTable);
        const approvedVolunteers = await db.select().from(volunteersTable).where(eq(volunteersTable.status, "approved"));
        res.status(200).json({
            messagesCount: messagesCount.length,
            unreadMessagesCount: unreadMessagesCount.length,
            volunteersCount: volunteersCount.length,
            pendingVolunteers: pendingVolunteers.length,
            faqsCount: faqsCount.length,
            approvedVolunteers: approvedVolunteers.length
        });
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getDashboardData;  