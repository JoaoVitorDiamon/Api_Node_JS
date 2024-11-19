import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getAllEventAndGuests } from "../../../../functions/EventAndGuests/get-all-event-and-guests";

export const getEventsAndGuests: FastifyPluginAsyncZod = async (app) => {
	app.get("/eventsAndGuests", async (_req, res) => {
		const getAllEventAndGuestss = await getAllEventAndGuests();

		res.status(200).send(getAllEventAndGuestss);
	});
};
