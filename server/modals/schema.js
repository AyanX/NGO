const { sql } = require("drizzle-orm");
const { boolean } = require("drizzle-orm/gel-core");
const { timestamp } = require("drizzle-orm/mysql-core");
const {
  int,
  mysqlTable,
  serial,
  varchar,
  datetime,
} = require("drizzle-orm/mysql-core");

const contactsTable = mysqlTable("contacts", {
  id: serial("id").primaryKey(),
  location: varchar("location", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
});

const socialsTable = mysqlTable("socials", {
  id: serial("id").primaryKey(),
  facebook: varchar("facebook", { length: 255 }).notNull(),
  twitter: varchar("twitter", { length: 255 }).notNull(),
  instagram: varchar("instagram", { length: 255 }).notNull(),
});

const messagesTable = mysqlTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: varchar("message", { length: 1000 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  read: boolean("read").default(false).notNull(),
  createdAt: timestamp("created_at", { mode: "string" })
    .notNull()
    .default(sql`now()`),
});

const faqsTable = mysqlTable("faqs", {
  id: serial("id").primaryKey(),
  question: varchar("question", { length: 1000 }).notNull(),
  answer: varchar("answer", { length: 2000 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" })
    .notNull()
    .default(sql`now()`),
});

const volunteersTable = mysqlTable("volunteers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  age: int("age").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  availability: varchar("availability", { length: 100 }).notNull(),
  motivation: varchar("motivation", { length: 1000 }).notNull(),
  languages: varchar("languages", { length: 255 }),
  status:varchar("status", {length:50}).notNull().default("pending"),
  confirmAccuracy: boolean("confirm_accuracy").notNull().default(false),
  agreeConduct: boolean("agree_conduct").notNull().default(false),
  createdAt: timestamp("created_at", {
    mode: "string",
  })
    .notNull()
    .defaultNow(),
});

module.exports = {
  contactsTable,
  messagesTable,
  socialsTable,
  faqsTable,
  volunteersTable,
};
