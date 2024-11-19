import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getAllBuyList } from "../../../../functions/buyList/get-all-buyLists";



export const getBuyLists: FastifyPluginAsyncZod = async app => {
  app.get("/buyList", async (_req, reply) => {
    const getAllBuyLists = await getAllBuyList();
    reply.status(200).send(getAllBuyLists);
  });
}