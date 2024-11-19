import { eq } from "drizzle-orm"
import { db } from "../../db"
import { Guests } from "../../db/schemas/guests"
import { EnumValues } from "zod";



interface GuestsRequest {
    id: string,
    name: string,
    age: number,
    contact: string,
    sexy: "M" | "F";
}



export async function updateGuest({ id, name, age, contact, sexy }: GuestsRequest) {
    const resultUpdate = await db.update(Guests).set({
        name,
        age,
        contact,
        sexy,
    }).where(eq(Guests.id, id)).returning();


    const [updateGuest] = resultUpdate;
    return updateGuest;
}