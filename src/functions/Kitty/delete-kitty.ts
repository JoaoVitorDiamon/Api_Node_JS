import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Kitty } from "../../db/schemas/kitty";
import { Events } from "../../db/schemas/events";

export async function deleteKitty(id: string) {
	await db.delete(Kitty).where(eq(Kitty.id, id)).returning();
}
