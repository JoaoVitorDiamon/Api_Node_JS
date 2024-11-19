import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { Events } from './events'
import { Guests } from './guests'

export const eventsAndGuests = pgTable('Eventos_Convidados', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  userID: text("usuario_id").notNull(),
  id_events: text('id_evento').references(() => Events.id, { onDelete: 'cascade' }).notNull(),
  id_guests: text('id_convidados').references(() => Guests.id, { onDelete: 'cascade' }).notNull(),
})
