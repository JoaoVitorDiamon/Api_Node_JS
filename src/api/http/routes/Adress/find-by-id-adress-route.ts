import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getAdressBYId } from "../../../../functions/Adress/find-by-id-adress";
import z from "zod";
import type { FastifyInstance } from "fastify";

const ParamsSchema = z.object({
	id: z.string({ message: "id is required" }),
})

	export const getAdressByID: FastifyPluginAsyncZod = async (fastify: FastifyInstance) => {
	fastify.get(
		"/adress/:id",
		{
			schema: {
				params: ParamsSchema
			},
		},
		async (req, reply) => {
			const { id } = req.params as z.infer<typeof ParamsSchema>;
			const adress = await getAdressBYId(id);
			reply.send(adress);
		},
	);
};
