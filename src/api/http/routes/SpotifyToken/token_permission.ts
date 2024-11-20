import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { authOptions } from "../../../../functions/SpotifyToken/token_permission";
import axios, { request } from "axios";
import app  from "../../server";

export const getTokenSpotifyy: FastifyPluginAsyncZod = async (app) => {
	// biome-ignore lint/style/noVar: <explanation>
	var token = "";

	app.get("/getTokenSpotify", {}, async (request, reply) => {
		try {
			const response = await axios.post(authOptions.url, authOptions.data, {
				headers: authOptions.headers,
			});

			const token = response.data.access_token;

			reply.send({ token: token });
		} catch (error) {
			console.error("Erro ao obter o token:", error);
			if (axios.isAxiosError(error)) {
				reply.status(error.response?.status || 500).send({
					error: error.response?.data || "Erro ao obter o token.",
				});
			} else {
				reply.status(500).send({ error: error.message });
			}
		}
	});
};
