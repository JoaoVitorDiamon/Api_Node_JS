import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { Kitty } from '../../db/schemas/kitty'

interface KittyRequest {
  id: string
  goal: string
  descriptions: string
}

export async function updateKitty({ id, goal, descriptions }: KittyRequest) {
  const [updatedKitty] = await db.update(Kitty).set({
    goal,
    descriptions,
  }).where(eq(Kitty.id,id)).returning();

  return updatedKitty;
}
