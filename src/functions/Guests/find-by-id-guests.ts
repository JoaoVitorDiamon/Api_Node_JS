import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Guests } from "../../db/schemas/guests";

export const findByIdGuest = async (id: string) => {
	const guests = await db
		.select({
			id: Guests.id,
			name: Guests.name,
			age: Guests.age,
			contact: Guests.contact,
			sexy: Guests.sexy,
		})
		.from(Guests)
		.where(eq(Guests.id, id));

	return guests;
};
