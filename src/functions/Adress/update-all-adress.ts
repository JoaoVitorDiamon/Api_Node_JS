import { eq } from "drizzle-orm";
import { db } from "../../db";
import { Adress } from "../../db/schemas/adress";
import type { AdressRequest } from "./create-adress";

export const updateAdress = async (
	adressRequest: AdressRequest,
	id: string,
) => {
	const [updatedAdress] = await db
		.update(Adress)
		.set({
			cep: adressRequest.cep,
			street: adressRequest.street,
			number: adressRequest.number,
			city: adressRequest.city,
			state: adressRequest.state,
			complement: adressRequest.complement,
			neighborhood: adressRequest.neighborhood,
			country: adressRequest.country,
		})
		.where(eq(Adress.id, id))
		.returning();

    return updatedAdress;
};
