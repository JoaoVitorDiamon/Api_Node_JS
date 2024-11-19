import z from "zod";
import { app } from "../../server";
import deleteEvent from "../../../../functions/Events/delete-events";

export const DeleteEvent = async () => {
	app.delete(
		"/event/:id",
		{
			schema: {
				params: z.object({
					id: z.string(),
				}),
			},
		},
		async (request, reply) => {
			const { id } = request.params;
			const deletedEvent = await deleteEvent(id);
			reply.send("Deletado com Sucesso");
      return deletedEvent;

		},
	);
};
