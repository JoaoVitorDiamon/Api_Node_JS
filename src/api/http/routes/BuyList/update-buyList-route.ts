import z from "zod";
import { app } from "../../server";
import { updateBuyList } from "../../../../functions/buyList/update-buyList";

export const updateBuyLists = async () => {
	app.put(
		"/buyList/:id",
		{
			schema: {
				params: z.object({
					id: z.string({ message: "id is required" }),
				}),
				body: z.object({
					name: z.string({ message: "name is required" }),
					status: z.string({ message: "status is required" }),
					id_events: z.string({ message: "id_events is required" }),
					quantity: z.string({ message: "quantity is required" }),
					userID: z.string({ message: "userID is required" }),
				}),
			},
		},
		async (request, reply) => {
			const { name, status, id_events, quantity, userID } = request.body;
			const { id } = request.params;

			const updatedBuyLists = await updateBuyList(
				{ name, status, id_events, quantity, userID },
				id,
			);

			reply.status(202).send({
				message: "Lista de Compras atualizada com sucesso",
				data: updatedBuyLists,
			});
		},
	);
};
