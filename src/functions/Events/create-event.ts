import { db } from "../../db";
import { Events } from "../../db/schemas/events";

interface CreateEventRequest {
	id_adress: string;
	id_kitty?: string;
	initial_date: Date;
	final_date: Date;
	name: string;
	userID: string;
	type: string;
	description: string;
	budget: string;
	pix: string;
	olderOfAge: boolean;
}

export async function createEvents({
	id_adress,
	id_kitty,
	budget,
	description,
	final_date,
	initial_date,
	name,
	userID,
	olderOfAge,
	pix,
	type,
}: CreateEventRequest) {
	const [resultEvent] = await db
		.insert(Events)
		.values({
			id_adress,
			id_kitty,
			name,
			userID,
			description,
			final_date,
			initial_date,
			budget,
			pix,
			type,
			olderOfAge,
		})
		.returning();

	return resultEvent.id;
}
