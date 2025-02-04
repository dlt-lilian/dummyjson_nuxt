import prisma from "~/lib/prisma";
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie'

export default defineEventHandler(async (event) => {
    if (isMethod(event, "GET")) {
        return prisma.user.findMany();

        Cookies.get('role')

    } else if (isMethod(event, "POST")) {
        const body = await readBody(event);

        // Hacher le mot de passe avant de le stocker
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // Cookie
        Cookies.set('role')

        // Créer un utilisateur avec le mot de passe haché
        return prisma.user.create({
            data: {
                name: body.name,
                role: 'user',
                email: body.email,
                password: hashedPassword  // Stocker le mot de passe haché
            }
        });
    } else if (isMethod(event, "PUT")) {
        const body = await readBody(event);
        const { id, ...data } = body;
        return prisma.user.update({ where: { id: id }, data: data });
    } else if (isMethod(event, "DELETE")) {
        const body = await readBody(event);
        return prisma.user.delete({ where: { id: body.id } });

        Cookies.remove('role')
    }
});


