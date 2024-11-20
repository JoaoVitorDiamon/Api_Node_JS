import fastify from "fastify";
import { getEvents } from "./routes/Events/get-all-events-route";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { getGuests } from "./routes/Guests/get-all-guests-route";
import { createsGuest } from "./routes/Guests/create-guests-route";
import { updatesGuests } from "./routes/Guests/update-guest-route";
import { DeleteGuests } from "./routes/Guests/delete-guest-route";
import { getKittys } from "./routes/Kitty/get-all-kittys-route";
import { createKittys } from "./routes/Kitty/create-kitty-route";
import { updatesKitty } from "./routes/Kitty/update-kitty-route";
import { DeleteKitty } from "./routes/Kitty/delete-kitty-router";
import { createEvent } from "./routes/Events/create-event-route";
import { DeleteEvent } from "./routes/Events/delete-events-route";
import { updateEvent } from "./routes/Events/update-event-route";
import { getBuyLists } from "./routes/BuyList/get-all-buyList-route";
import { createBuyLists } from "./routes/BuyList/create-buyList-route";
import { updateBuyLists } from "./routes/BuyList/update-buyList-route";
import { deleteBuyLists } from "./routes/BuyList/delete-buyList";
import { getEventsAndGuests } from "./routes/EventAndGuests/get-all-event-and-guests";
import { getTokenSpotifyy } from "./routes/SpotifyToken/token_permission";
import { getEventsByID } from "./routes/Events/find-by-id-event-route";
import { getAdress } from "./routes/Adress/get-all-adress-route";
import { createdAdress } from "./routes/Adress/create-adress-router";
import { updatesAdress } from "./routes/Adress/update-adress-route";
import deletesAdress from "./routes/Adress/delete-adress-route";
import { getGuestsByID } from "./routes/Guests/find-by-id-guests-route";
import { getAdressByID } from "./routes/Adress/find-by-id-adress-route";
import cors from "@fastify/cors";
import { getEventsByUserID } from "./routes/Events/find-by-userID-events";

const app = fastify().withTypeProvider<ZodTypeProvider>();
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
export default app; 