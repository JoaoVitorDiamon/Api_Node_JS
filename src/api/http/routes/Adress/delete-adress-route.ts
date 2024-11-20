import z from "zod";
import app from "../../server";
import { deleteAdressbyID } from "../../../../functions/Adress/delete-adress";
import type { FastifyInstance } from 'fastify';


const ParamsSchema = z.object({
	id: z.string({ message: "id is required" }), 
});
const deletesAdress = async (fastify: FastifyInstance) => {
	fastify.delete(
		"/adress/:id",
		{
			schema: {
        params: ParamsSchema, 
      }, //,
		},
		async (request, reply) => {
			const { id } = request.params as z.infer<typeof ParamsSchema>;
			const deleteAdress = await deleteAdressbyID(id);

			reply.status(204).send({
				message: "Lista de Compras deletada com sucesso",
			});
		},
	);
};

export default deletesAdress;
