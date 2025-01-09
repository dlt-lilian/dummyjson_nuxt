import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    if (isMethod(event, "GET")) {
        return prisma.user.findMany();
    } else if (isMethod(event, "POST")) {
        const body = await readBody(event);
        return prisma.user.create({ data: body });
    } else if (isMethod(event, "PUT")) {
        const body = await readBody(event);
        const { id, ...data } = body;
        return prisma.user.update({ where: { id: id }, data: data });
    } else if (isMethod(event, "DELETE")) {
        const body = await readBody(event);
        return prisma.user.delete({ where: { id: body.id } });
    }
});