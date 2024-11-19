import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { client, db } from '../../db/index'
import dayjs from 'dayjs'
import { eq } from 'drizzle-orm'
import { alias } from 'drizzle-orm/pg-core'
import { Adress } from '../../db/schemas/adress'
import { Events } from '../../db/schemas/events'
import { Kitty } from '../../db/schemas/kitty'

export const getAllEvents = async () => {
  const getAllEvent = await db
    .select({
      id: Events.id,
      name: Events.name,
      description: Events.description,
      pix: Events.pix,
      type: Events.type,
      initial_date: Events.initial_date,
      final_date: Events.final_date,
      budget: Events.budget,
      userID: Events.userID,
      olderOfAge: Events.olderOfAge,
      goal: Kitty.goal,
      descriptions: Kitty.descriptions,
      cep: Adress.cep,
      street: Adress.street,
      number: Adress.number,
      city: Adress.city,
      state: Adress.state,
      complement: Adress.complement,
      neighborhood: Adress.complement,
      country: Adress.complement,
    })
    .from(Events)
    .innerJoin(Adress, eq(Events.id_adress, Adress.id)) 
    .leftJoin(Kitty, eq(Events.id_kitty, Kitty.id))

  return getAllEvent
}
