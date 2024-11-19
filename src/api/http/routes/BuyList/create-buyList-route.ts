import z from "zod";
import { app } from "../../server";
import { createBuyList } from "../../../../functions/buyList/create-buyList";

export const createBuyLists = async () => {
	app.post(
		"/buyList",
		{
			schema: {
				body: z.object({
					name: z.string({ message: "name is required" }),
					userID: z.string({ message: "userID is required" }),
					status: z.string({ message: "status is required" }),
					id_events: z.string({ message: "id_events is required" }),
					quantity: z.string({ message: "quantity is required" }),
				}),
			},
		},
		async (request, reply) => {
			const { name, status, id_events, userID, quantity } = request.body;
			const createdbuyLists = await createBuyList({
				name,
				status,
				id_events,
				userID,
				quantity,
			});
			reply.status(201).send({
				message: "Lista de Compras criado com sucesso",
				id: createdbuyLists,
			});
		},
	);
};
