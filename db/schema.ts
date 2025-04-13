import { relations } from "drizzle-orm";
import {
    pgTable,
    pgEnum,
    text,
    timestamp,
    uuid,
    boolean,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: uuid("id").defaultRandom().notNull().primaryKey(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    userName: text("user_name").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const todoStatus = pgEnum("todo_status", ["todo", "inprogress", "done"]);

export const userRelations = relations(user, ({ many }) => ({
    todos: many(todo),
}));

export const todo = pgTable("todo", {
    id: uuid("id").defaultRandom().notNull().primaryKey(),
    userId: uuid("user_id").references(() => user.id, { onDelete: "cascade" }),
    title: text().notNull(),
    content: text().notNull(),
    dueDate: timestamp().notNull(),
    status: todoStatus("status").notNull().default("todo"),
    isImportant: boolean("is_important").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const todoRelations = relations(todo, ({ one }) => ({
    user: one(user, {
        fields: [todo.userId],
        references: [user.id],
    }),
}));
