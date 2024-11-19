import { db } from "../../db";
import { Kitty } from "../../db/schemas/kitty";

interface KittyRequest {
	goal: string;
	descriptions: string;
	userID: string;
}

export async function createKitty({
	goal,
	descriptions,
	userID,
}: KittyRequest) {
	const [createdKitty] = await db
		.insert(Kitty)
		.values({
      goal,
			descriptions,
			userID, 
		})
		.returning();

	return createdKitty.id;
}
