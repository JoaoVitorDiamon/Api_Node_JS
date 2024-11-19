import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { Events } from '../../db/schemas/events'

interface CreateEventRequest {
  id : string
  initial_date: Date
  final_date: Date
  name: string
  type: string
  description: string
  budget: string
  pix: string
  olderOfAge: boolean
}

export async function UpdateEvents(
  {
    id,
    budget,
    description,
    final_date,
    initial_date,
    name,
    olderOfAge,
    pix,
    type,
  }: CreateEventRequest,
  
) {
  const resultEvent = await db
    .update(Events)
    .set({
      name,
      description,
      final_date,
      initial_date,
      budget,
      pix,
      type,
      olderOfAge,
    })
    .where(eq(Events.id, id))
    .returning()

  const event = resultEvent[0]
  return {
    event,
  }
}
