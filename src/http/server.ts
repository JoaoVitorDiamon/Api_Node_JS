import fastify from "fastify";
import { getEvents } from "./api/Events/get-all-events-route";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { getGuests } from "./api/Guests/get-all-guests-route";
import { createsGuest } from "./api/Guests/create-guests-route";
import { updatesGuests } from "./api/Guests/update-guest-route";
import { DeleteGuests } from "./api/Guests/delete-guest-route";
import { getKittys } from "./api/Kitty/get-all-kittys-route";
import { createKittys } from "./api/Kitty/create-kitty-route";
import { updatesKitty } from "./api/Kitty/update-kitty-route";
import { DeleteKitty } from "./api/Kitty/delete-kitty-router";
import { createEvent } from "./api/Events/create-event-route";
import { DeleteEvent } from "./api/Events/delete-events-route";
import { updateEvent } from "./api/Events/update-event-route";
import { getBuyLists } from "./api/BuyList/get-all-buyList-route";
import { createBuyLists } from "./api/BuyList/create-buyList-route";
import { updateBuyLists } from "./api/BuyList/update-buyList-route";
import { deleteBuyLists } from "./api/BuyList/delete-buyList";
import { getEventsAndGuests } from "./api/EventAndGuests/get-all-event-and-guests";
import { getTokenSpotifyy } from "./api/SpotifyToken/token_permission";
import { getEventsByID } from "./api/Events/find-by-id-event-route";
import { getAdress } from "./api/Adress/get-all-adress-route";
import { createdAdress } from "./api/Adress/create-adress-router";
import { updatesAdress } from "./api/Adress/update-adress-route";
import deletesAdress from "./api/Adress/delete-adress-route";
import { getGuestsByID } from "./api/Guests/find-by-id-guests-route";
import { getAdressByID } from "./api/Adress/find-by-id-adress-route";
import cors from "@fastify/cors";
import { getEventsByUserID } from "./api/Events/find-by-userID-events";

export const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});


app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
	if (err) {
		console.error("Erro ao iniciar o servidor:", err);
		process.exit(1);
	}
	console.log(`Servidor HTTP rodando em ${address}`);
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Events / Eventos
app.register(getEvents);
app.register(createEvent);
app.register(updateEvent);
app.register(DeleteEvent);
app.register(getEventsByID);
app.register(getEventsByUserID)

// Guests / Convidados
app.register(getGuests);
app.register(createsGuest);
app.register(updatesGuests);
app.register(DeleteGuests);
app.register(getGuestsByID);

// Kitts / Vaquinha
app.register(getKittys);
app.register(createKittys);
app.register(updatesKitty);
app.register(DeleteKitty);

// Adress / Endereco
app.register(getAdress);
app.register(createdAdress);
app.register(updatesAdress);
app.register(deletesAdress);
app.register(getAdressByID);
//BuyList / Lista de Compras
app.register(getBuyLists);
app.register(createBuyLists);
app.register(updateBuyLists);
app.register(deleteBuyLists);

// EventAndGuests / Eventos e Convidados
app.register(getEventsAndGuests);

//Spotify
app.register(getTokenSpotifyy);
