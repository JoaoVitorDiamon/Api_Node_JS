import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { findEventByUserID } from "../../../../functions/Events/find-by-userID-events";
import app  from "../../server";

export const getEventsByUserID: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/:userID/events",
		{
			schema: {
				params: z.object({
					userID: z.string(),
				}),
			},
		},
		async (req, reply) => {
			const { userID } = req.params;
			const event = await findEventByUserID(userID);
			reply.send(event);
		},
	);
};
