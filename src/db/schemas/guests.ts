import { pgTable, text, integer, char } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const Guests = pgTable('Convidados', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('nome').notNull(),
  age: integer('idade').notNull(),
  contact: text('contato').notNull(),
  sexy: char('sexo', 
  { length: 1 }).notNull(),
  userID: text("usuario_id").notNull(),
})
