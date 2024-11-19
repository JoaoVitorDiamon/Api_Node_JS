import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getAllEvents } from '../../../../functions/Events/get-all-events'
import { getAllGuests } from '../../../../functions/Guests/get-all-guests'

export const getGuests: FastifyPluginAsyncZod = async app => {
  app.get('/guests', async (_request, response) => {
    const dataGuests = await getAllGuests()
    response.send(dataGuests)
  })
}
