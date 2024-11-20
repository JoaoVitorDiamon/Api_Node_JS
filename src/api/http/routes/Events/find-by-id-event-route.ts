import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { findEventById } from "../../../../functions/Events/find-by-id-events";
import app  from "../../server";

export const getEventsByID: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/events/:id",
		{
			schema: {
				params: z.object({
					id: z.string(),
				}),
			},
		},
		async (req, reply) => {
			const { id } = req.params;
			const event = await findEventById(id);
			reply.send(event);
		},
	);
};
