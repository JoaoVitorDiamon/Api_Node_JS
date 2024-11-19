import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { Events } from '../../db/schemas/events'

const deleteEvent = async (id: string) => {
  await db.delete(Events).where(eq(Events.id, id))
}

export default deleteEvent
