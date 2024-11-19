import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Adress } from "../../db/schemas/adress";

export const getAdressBYId = async (id: string) => {
	const adress = await db
		.select({
			id: Adress.id,
			street: Adress.street,
			number: Adress.number,
			city: Adress.city,
			state: Adress.state,
			complement: Adress.complement,
			neighborhood: Adress.neighborhood,
			country: Adress.country,
			cep: Adress.cep,
		})
		.from(Adress)
		.where(eq(Adress.id, id));

	return adress;
};
