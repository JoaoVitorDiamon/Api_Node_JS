import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { client, db } from '.'
import dayjs from 'dayjs'
import { Adress } from './schemas/adress'
import { buyList } from './schemas/buyList'
import { Events } from './schemas/events'
import { eventsAndGuests } from './schemas/eventsAndGuests'
import { Guests } from './schemas/guests'
import { Kitty } from './schemas/kitty'

const lasyDayofWeek = dayjs().endOf('week')
const lasyDayofMouth = dayjs().endOf('month')

async function seed() {
  await db.delete(eventsAndGuests)
  await db.delete(buyList)
  await db.delete(Guests)
  await db.delete(Events)
  await db.delete(Kitty)
  await db.delete(Adress)

  const resultId = await db
    .insert(Adress)
    .values([
      {
        cep: '16015-145',
        city: 'Sao Paulo',
        number: 110,
        state: 'Sao Paulo', 
        userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",
        street: 'Avenida dos Araçás',
        country: 'Brasil',
        complement: 'Casa',
        neighborhood: 'Vila Mendonça',
      },
    ])
    .returning()
  const ResultIdKitty = await db
    .insert(Kitty)
    .values([
      {
        goal: '1900',
        userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",
        descriptions: 'Vaquinha Pra ajudar um cabaco',
      },
    ])
    .returning()

  const resultIdEvents = await db
    .insert(Events)
    .values([
      {
        name: 'Role dos Parcas',
        id_adress: resultId[0].id,
        id_kitty: ResultIdKitty[0].id,
        description: 'Evento de Role',
        pix: '123712893712',
        userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",
        type: 'Role',
        initial_date: lasyDayofWeek.toDate(),
        final_date: lasyDayofMouth.toDate(),
        budget: '1900',
        olderOfAge: true,
      },
    ])
    .returning()

  const resultIdGuests = await db
    .insert(Guests)
    .values([
      {
        name: 'Ronaldo Fenomeno',
        age: 20,
        userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",
        contact: '11-939282007',
        sexy: 'M',
      },
    ])
    .returning()

  await db.insert(eventsAndGuests).values([
    {
      id_events: resultIdEvents[0].id,
      id_guests: resultIdGuests[0].id,
      userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",

    },
  ])

  await db.insert(buyList).values([
    {
      userID:"If01rBv6vraMm4XUH4lgQjIA3Rs2",
      id_events: resultIdEvents[0].id,
      name: 'Coca Cola Zero',
      status: 'pending',
      quantity: '10',
    },
  ])
}

seed().finally(() => client.end())
