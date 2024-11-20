import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import app  from "../../server";
import z from 'zod'
import { desc } from 'drizzle-orm'
import { getAllKittys } from '../../../../functions/Kitty/get-all-kittys'

export const getKittys: FastifyPluginAsyncZod = async app => {
  app.get('/Kittys', {}, async (_request, reply) => {
    const getAllsKittys = await getAllKittys()
    return reply.send(getAllsKittys)
  })
}
