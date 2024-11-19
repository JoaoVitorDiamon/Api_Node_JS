import { db } from "../../db";
import { Guests } from "../../db/schemas/guests";

interface GuestRequest {
	name: string;
	age: number;
	contact: string;
	sexy: string;
	userID: string;
}

export async function createGuest({ name, age, contact, sexy, userID }: GuestRequest) {
	const [createdGuest] = await db
		.insert(Guests)
		.values({
			name,
			age,
			userID,
			contact,
			sexy,
		})
		.returning();
	return createdGuest.id;
}
