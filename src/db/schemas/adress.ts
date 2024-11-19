import { pgTable, text, integer } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'



export const Adress = pgTable('Endereco', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  cep: text('cep').notNull(),
  street: text('rua').notNull(),
  userID: text('usuario_id').notNull(),
  number: integer('numero').notNull(),
  city: text('cidade').notNull(),
  state: text('estado').notNull(),
  complement: text('complemento'),
  neighborhood: text('bairro').notNull(),
  country: text('pais').notNull(),
})
