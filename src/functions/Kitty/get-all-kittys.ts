import { db } from '../../db'
import { Kitty } from '../../db/schemas/kitty'

export async function getAllKittys() {
  const getallKitty = await db
    .select({
      id: Kitty.id,
      goal: Kitty.goal,
      descriptions: Kitty.descriptions,
    })
    .from(Kitty)

  return getallKitty
}
