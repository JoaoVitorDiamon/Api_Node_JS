import z from 'zod'
import app  from "../../server";
import { updateKitty } from '../../../../functions/Kitty/update-kitty'

export const updatesKitty = async () => {
  app.put(
    '/Kitty/:id',
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          goal: z.string({ message: 'Goal is required' }),
          descriptions: z.string({ message: 'Descriptions is required' }),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params
      const { goal, descriptions } = request.body

      const updatedKitty = await updateKitty({ id, goal, descriptions });

      reply.status(201).send({
        message: 'Kitty atualizado com sucesso',
        data: updatedKitty,
      });
    }
  )
}
