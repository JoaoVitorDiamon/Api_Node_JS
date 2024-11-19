import z from "zod";
import { app } from "../../server";
import { createGuest } from "../../../../functions/Guests/create-guest";

export const createsGuest = async () => {
	app.post(
		"/guest",
		{
			schema: {
				body: z.object({
					name: z.string({ message: "Guest name is required" }),
					age: z.number({ message: "Age is required" }),
					userID: z.string({ message: "User ID is required" }),
					contact: z.string({ message: "Contact is required" }),
					sexy: z.enum(["M", "F"], {
						invalid_type_error: "Sexo é obrigatório",
						required_error: "Sexo é obrigatório",
					}),
				}),
			},
		},
		async (request, reply) => {
			const { name, age, contact, sexy, userID } = request.body;
			const createdGuest = await createGuest({
				name,
				age,
				contact,
				sexy,
				userID,
			});
			reply.status(201).send({
				message: "Convidado criado com sucesso",
				id: createdGuest,
			});
		},
	);
};
