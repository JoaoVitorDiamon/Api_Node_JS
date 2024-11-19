import { db } from "../../db";
import { buyList } from "../../db/schemas/buyList";

export const getAllBuyList = async () => {
	const buyLists = await db
		.select({
			id: buyList.id,
			name: buyList.name,
			status: buyList.status,
			id_events: buyList.id_events,
			quantity: buyList.quantity,
		})
		.from(buyList);

	return buyLists;
};
