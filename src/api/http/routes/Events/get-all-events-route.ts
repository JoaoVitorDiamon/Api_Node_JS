import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getAllEvents } from '../../../../functions/Events/get-all-events'

export const getEvents: FastifyPluginAsyncZod = async app => {
  app.get('/events', async (_req, res) => {
    const getAllEvent = await getAllEvents();
    res.send(getAllEvent);
  })
}
