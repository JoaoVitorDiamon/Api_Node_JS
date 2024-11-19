import { eq } from "drizzle-orm"
import { db } from "../../db"
import { Guests } from "../../db/schemas/guests"
import { eventsAndGuests } from "../../db/schemas/eventsAndGuests"



export const deleteGuest = async (id: string) => {
    await db.delete(Guests).where(eq(Guests.id, id));
}


