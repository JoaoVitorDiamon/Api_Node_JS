import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getAdressBYId } from "../../../../functions/Adress/find-by-id-adress";
import z from "zod";


export const getAdressByID: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/adress/:id",
		{
			schema: {
				params: z.object({
					id: z.string(),
				}),
			},
		},
		async (req, reply) => {
			const { id } = req.params;
			const adress = await getAdressBYId(id);
			reply.send(adress);
		},
	);
};
