import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import app  from "../../server";
import { createKitty } from "../../../../functions/Kitty/create-kitty";

export const createKittys: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/Kitty",
		{
			schema: {
				body: z.object({
					goal: z.string({ message: "goal is required" }),
					userID: z.string({ message: "userID is required" }),
					descriptions: z.string({ message: "descriptions is required" }),
				}),
			},
		},
		async (request, reply) => {
			const { goal, descriptions, userID } = request.body;
			const createdKitty = await createKitty({ goal, descriptions, userID });
			reply.status(201).send({
				message: "Kitty criado com sucesso",
				id: createdKitty,
			});
		},
	);
};
