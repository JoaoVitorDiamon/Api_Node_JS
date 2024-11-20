import z from "zod";
import app from "../../server";
import { updateAdress } from "../../../../functions/Adress/update-all-adress";
import type { FastifyInstance } from "fastify/types/instance";
const AddressSchema = z.object({
	cep: z.string({ message: "cep is required" }),
	street: z.string({ message: "street is required" }),
	number: z.number({ message: "number is required" }),
	city: z.string({ message: "city is required" }),
	state: z.string({ message: "state is required" }),
	userID: z.string({ message: "userID is required" }),
	complement: z.string({ message: "complement is required" }),
	neighborhood: z.string({ message: "neighborhood is required" }),
	country: z.string({ message: "country is required" }),
});
const ParamsSchema = z.object({
	id: z.string({ message: "id is required" }), 
});
export const updatesAdress = async (fastify: FastifyInstance) => {
	fastify.put(
		"/adress/:id",
		{
			schema: {
				params: ParamsSchema,
				body:AddressSchema
			},
		},
		async (request, reply) => {
			const { id } = request.params as z.infer<typeof ParamsSchema>;
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
			} = request.body as z.infer<typeof AddressSchema>;
			const updatedAdress = await updateAdress(
				{ cep, street, number, city, state, complement, neighborhood, country, userID },
				id,
			);

			reply.status(204).send({
				message: "Endereco atualizado com sucesso",
				data: updatedAdress,
			});
		},
	);
};
