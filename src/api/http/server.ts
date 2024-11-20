import fastify from 'fastify';
// import { getEvents } from './routes/Events/get-all-events-route';
// import { getGuests } from './routes/Guests/get-all-guests-route';
// import { createsGuest } from './routes/Guests/create-guests-route';
// import { updatesGuests } from './routes/Guests/update-guest-route';
// import { DeleteGuests } from './routes/Guests/delete-guest-route';
// import { getKittys } from './routes/Kitty/get-all-kittys-route';
// import { createKittys } from './routes/Kitty/create-kitty-route';
// import { updatesKitty } from './routes/Kitty/update-kitty-route';
// import { DeleteKitty } from './routes/Kitty/delete-kitty-router';
// import { createEvent } from './routes/Events/create-event-route';
// import { DeleteEvent } from './routes/Events/delete-events-route';
// import { updateEvent } from './routes/Events/update-event-route';
// import { getBuyLists } from './routes/BuyList/get-all-buyList-route';
// import { createBuyLists } from './routes/BuyList/create-buyList-route';
// import { updateBuyLists } from './routes/BuyList/update-buyList-route';
// import { deleteBuyLists } from './routes/BuyList/delete-buyList';
// import { getEventsAndGuests } from './routes/EventAndGuests/get-all-event-and-guests';
// import { getTokenSpotifyy } from './routes/SpotifyToken/token_permission';
// import { getEventsByID } from './routes/Events/find-by-id-event-route';
// import { getAdress } from './routes/Adress/get-all-adress-route';
// import { createdAdress } from './routes/Adress/create-adress-router';
// import { updatesAdress } from './routes/Adress/update-adress-route';
// import deletesAdress from './routes/Adress/delete-adress-route';
// import { getGuestsByID } from './routes/Guests/find-by-id-guests-route';
// import { getAdressByID } from './routes/Adress/find-by-id-adress-route';
import cors from '@fastify/cors';
// import { getEventsByUserID } from './routes/Events/find-by-userID-events';
import { serializerCompiler, validatorCompiler, type FastifyPluginAsyncZod, type ZodTypeProvider } from 'fastify-type-provider-zod';
// import { getAllAdress } from '../../functions/Adress/get-all-adress';
import type { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { getAllAdress } from '../../functions/Adress/get-all-adress';
import { z } from 'zod';
import { createAdress } from '../../functions/Adress/create-adress';





const app = fastify({
	requestTimeout: 30000,
}).withTypeProvider<ZodTypeProvider>();
app.register(cors, {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],
});

app.get('/', async (request, reply) => {
	return { hello: 'Mundo e Lindo' };
});

app.get("/adress", async (_req, reply) => {
	const getAllAdresss = await getAllAdress();
	reply.status(200).send(getAllAdresss);
});
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




app.post(
	"/adress",
	{
		schema: {
			body: AddressSchema,
		},
	},
	async (req, reply) => {
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
		} = req.body as z.infer<typeof AddressSchema>;
		const createdAdress = await createAdress({
			cep,
			street,
			number,
			city,
			state,
			userID,
			complement,
			neighborhood,
			country,
		});
		reply
			.status(201)
			.send({ message: "Adress created successfully", id: createdAdress });
	},
);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// app.register(getEvents);
// app.register(createEvent);
// app.register(updateEvent);
// app.register(DeleteEvent);
// app.register(getEventsByID);
// app.register(getEventsByUserID);
// app.register(getGuests);
// app.register(createsGuest);
// app.register(updatesGuests);
// app.register(DeleteGuests);
// app.register(getGuestsByID);
// app.register(getKittys);
// app.register(createKittys);
// app.register(updatesKitty);
// app.register(DeleteKitty);
// app.register(getAdress);
// app.register(createdAdress);
// app.register(updatesAdress);
// app.register(deletesAdress);
// app.register(getAdressByID);
// app.register(getBuyLists);
// app.register(createBuyLists);
// app.register(updateBuyLists);
// app.register(deleteBuyLists);
// app.register(getEventsAndGuests);
// app.register(getTokenSpotifyy);


export default async function handler(req: FastifyRequest, res: FastifyReply) {
	await app.ready(); // Garante que o Fastify esteja pronto
	app.server.emit('request', req, res); // Emite a requisição para o Fastify processar
}