import { db } from "../../db";
import { buyList } from "../../db/schemas/buyList";

export interface BuyListRequest {
	name: string;
	status: string;
	userID: string;
	id_events: string;
	quantity: string;
}

export const createBuyList = async (buyListRequest: BuyListRequest) => {
	const [buyListCreated] = await db
		.insert(buyList)
		.values({
			name: buyListRequest.name,
			status: buyListRequest.status,
			userID: buyListRequest.userID,
			id_events: buyListRequest.id_events,
			quantity: buyListRequest.quantity,
		})
		.returning();

	return buyListCreated.id;
};
