import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Adress } from "../../db/schemas/adress";
import { Events } from "../../db/schemas/events";

export const deleteAdressbyID = async (id: string) => {
	await db.delete(Adress).where(eq(Adress.id, id));
};

