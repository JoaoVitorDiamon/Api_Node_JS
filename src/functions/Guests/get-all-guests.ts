import { client, db } from "../../db/index";
import { Guests } from "../../db/schemas/guests";

export const getAllGuests = async () => {
	const getAllGuestData = await db
		.select({
			id: Guests.id,
			name: Guests.name,
			age: Guests.age,
			contact: Guests.contact,
			sexy: Guests.sexy,
		})
		.from(Guests);

	return getAllGuestData;
};






