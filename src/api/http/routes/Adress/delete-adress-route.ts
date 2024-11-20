import z from "zod";
import { app } from "../../server";
import { deleteAdressbyID } from "../../../../functions/Adress/delete-adress";

 const deletesAdress = async () => {
	app.delete(
		"/adress/:id",
		{
			schema: {
				params: z.object({
					id: z.string({ message: "id is required" }),
				}),
			},
		},
		async (request, reply) => {
			const { id } = request.params;
			const deleteAdress = await deleteAdressbyID(id);

			reply.status(204).send({
				message: "Lista de Compras deletada com sucesso",
			});
		},
	);
};

export default deletesAdress;
