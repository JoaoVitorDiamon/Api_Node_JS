import { eq } from "drizzle-orm"
import { db } from "../../db"
import { buyList } from "../../db/schemas/buyList"
import { Events } from "../../db/schemas/events"



export const deleteBuyList = async (id: string) => {
  await db.delete(buyList).where(eq(buyList.id, id))
}