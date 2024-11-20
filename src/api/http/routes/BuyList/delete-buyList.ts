import z from "zod";
import app  from "../../server";
import { deleteBuyList } from "../../../../functions/buyList/delete-buyList";

export const deleteBuyLists = async () => {
	app.delete(
		"/buyList/:id",
		{
			schema: {
				params: z.object({
					id: z.string({ message: "id is required" }),
				}),
			},
		},
		async (request, reply) => {
			const { id } = request.params;
			const deletedBuyLists = await deleteBuyList(id);

			reply.status(204).send({
				message: "Lista de Compras deletada com sucesso",
			});
		},
	);
};
