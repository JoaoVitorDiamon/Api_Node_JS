import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { Adress } from "../../db/schemas/adress";
import { Events } from "../../db/schemas/events";
import { eventsAndGuests } from "../../db/schemas/eventsAndGuests";
import { Guests } from "../../db/schemas/guests";

export const getAllEventAndGuests = async () => {
	const dataEventAndGuests = await db
		.select({
			name: Events.name,
			description: Events.description,
			pix: Events.pix,
			type: Events.type,
			initial_date: Events.initial_date,
			final_date: Events.final_date,
			budget: Events.budget,
			olderOfAge: Events.olderOfAge,
			cep: Adress.cep,
			street: Adress.street,
			number: Adress.number,
			city: Adress.city,
			state: Adress.state,
			complement: Adress.complement,
			neighborhood: Adress.complement,
			country: Adress.complement,
			nameGuest: Guests.name,
			age: Guests.age,
			contact: Guests.contact,
			sexy: Guests.sexy,
		})
		.from(eventsAndGuests)
		.innerJoin(Events, eq(Events.id, eventsAndGuests.id_events))
		.innerJoin(Adress, eq(Events.id_adress, Adress.id))
		.innerJoin(Guests, eq(Guests.id, eventsAndGuests.id_guests));

	return dataEventAndGuests;
};
