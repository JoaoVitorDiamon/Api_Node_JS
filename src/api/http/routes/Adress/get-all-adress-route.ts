import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { app } from "../../server";
import { getAllAdress } from "../../../../functions/Adress/get-all-adress";

export const getAdress: FastifyPluginAsyncZod = async (app) => {
	app.get("/adress", async (_req, reply) => {
		const getAllAdresss = await getAllAdress();
		reply.status(200).send(getAllAdresss);
	});
};
