import z from 'zod'
import { UpdateEvents } from '../../../../functions/Events/update-event'
import { app } from '../../server'

export const updateEvent = async () => {
  app.put(
    '/event/:id',
    {
      schema: {
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          initial_date: z.preprocess(arg => {
            if (typeof arg === 'string') {
              const date = new Date(arg)
              if (!Number.isNaN(date.getTime())) {
                return date
              }
            }
            return arg
          }, z.date()),
          final_date: z.preprocess(arg => {
            if (typeof arg === 'string') {
              const date = new Date(arg)
              if (!Number.isNaN(date.getTime())) {
                return date
              }
            }
            return arg
          }, z.date()),
          name: z.string(),
          type: z.string(),
          description: z.string(),
          budget: z.string(),
          pix: z.string(),
          olderOfAge: z.boolean(),
        }),
      },
    },
    async request => {
      const { id } = request.params
      const {
        name,
        budget,
        description,
        final_date,
        initial_date,
        olderOfAge,
        pix,
        type,
      } = request.body

      await UpdateEvents({
        id,
        name,
        description,
        final_date,
        initial_date,
        budget,
        pix,
        type,
        olderOfAge,
      })
    }
  )
}
