import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { Adress } from "./adress";
import { Kitty } from "./kitty";

export const Events = pgTable("Eventos", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	id_adress: text("id_endereco")
		.references(() => Adress.id, { onDelete: "cascade" })
		.notNull(),
	id_kitty: text("id_vaquinha").references(() => Kitty.id, {
		onDelete: "cascade",
	}),
	userID: text("usuario_id").notNull(),
	initial_date: timestamp("data_inicial", { withTimezone: true }).notNull(),
	final_date: timestamp("data_final", { withTimezone: true }).notNull(),
	name: text("nome").notNull(),
	type: text("tipo").notNull(),
	description: text("descricao").notNull(),
	budget: text("orcamento").notNull(),
	pix: text("pix").notNull(),
	olderOfAge: boolean("maiorDeIdade").notNull().default(false),
});
