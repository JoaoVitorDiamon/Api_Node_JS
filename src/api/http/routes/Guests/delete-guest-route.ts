import z from "zod";
import { app } from "../../server";
import { deleteGuest } from "../../../../functions/Guests/delete-guest";

export const DeleteGuests = async () => {
    app.delete(
        "/guest/:id",
        {
            schema: {
                params: z.object({
                    id: z.string(),
                }),
            },
        },
        async (request, reply) => {
            const { id } = request.params;
            const deletedGuest = await deleteGuest(id);
            reply.send({
                message: "Deletado com Sucesso",
                data: deletedGuest
            }
            );
            return deletedGuest;

        },
    );
};
