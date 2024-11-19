import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { client, db } from "../../db/index";
import dayjs from "dayjs";
import { eq } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { Adress } from "../../db/schemas/adress";

export const getAllAdress = async () => {
	const getAllAdress = await db
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
		.from(Adress);

        return getAllAdress;
};
