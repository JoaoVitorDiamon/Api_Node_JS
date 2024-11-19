import z from 'zod'
import { app } from '../../server'
import { deleteKitty } from '../../../../functions/Kitty/delete-kitty'

export const DeleteKitty = async () => {
  app.delete(
    '/Kitty/:id',
    {
      schema: {
        params: z.object({
          id: z.string({ message: 'Id is required' }),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params
      const deletedKitty = await deleteKitty(id)
      reply.send({
        message: 'Kitty deletado com sucesso',
        data: deletedKitty,
      })
      return deletedKitty


    }
  )
}
