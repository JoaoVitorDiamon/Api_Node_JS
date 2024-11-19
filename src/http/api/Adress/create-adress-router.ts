import z from "zod";
import { createAdress } from "../../../../functions/Adress/create-adress";
import { app } from "../../server";

export const createdAdress = async () => {
	app.post(
		"/adress",
		{
			schema: {
				body: z.object({
					cep: z.string({ message: "cep is required" }),
					street: z.string({ message: "street is required" }),
					number: z.number({ message: "number is required" }),
					city: z.string({ message: "city is required" }),
					state: z.string({ message: "state is required" }),
					userID: z.string({ message: "userID is required" }),
					complement: z.string({ message: "complement is required" }),
					neighborhood: z.string({ message: "neighborhood is required" }),
					country: z.string({ message: "country is required" }),
				}),
			},
		},
		async (req, reply) => {
			const {
				cep,
				street,
				number,
				city,
				state,
				complement,
				userID,
				neighborhood,
				country,
			} = req.body;
			const createdAdress = await createAdress({
				cep,
				street,
				number,
				city,
				state,
				userID,
				complement,
				neighborhood,
				country,
			});
			reply
				.status(201)
				.send({ message: "Adress created successfully", id: createdAdress });
		},
	);
};
