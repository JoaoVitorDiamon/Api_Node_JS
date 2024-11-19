import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { findByIdGuest } from "../../../../functions/Guests/find-by-id-guests";

export const getGuestsByID: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/guest/:id",
		{
			schema: {
				params: z.object({
					id: z.string(),
				}),
			},
		},
		async (request, reply) => {
			const { id } = request.params;
			const guest = await findByIdGuest(id);
			reply.send(guest);
		},
	);
};
