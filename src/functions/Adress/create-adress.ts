import { db } from '../../db'
import { Adress } from '../../db/schemas/adress'

export interface AdressRequest {
  cep: string
  street: string
  number: number
  city: string
  state: string
  userID: string
  complement: string
  neighborhood: string
  country: string
}
export async function createAdress({
  cep,
  street, 
  number, 
  city,
  state,
  userID,
  complement,
  neighborhood,
  country,
}: AdressRequest){
  const [resultAdress] = await db
    .insert(Adress)
    .values({
      cep,
      street, 
      number, 
      city,
      state,
      userID,
      complement,
      neighborhood,
      country,
    })
    .returning()

  return resultAdress.id
}