// import prisma from "~/lib/prisma";
//
// export default defineEventHandler(async (event) => {
//     if (isMethod(event, "GET")) {
//         return prisma.user.findMany();
//     } else if (isMethod(event, "POST")) {
//         const body = await readBody(event);
//         return prisma.user.create({ data: body });
//     } else if (isMethod(event, "PUT")) {
//         const body = await readBody(event);
//         const { id, ...data } = body;
//         return prisma.user.update({ where: { id: id }, data: data });
//     } else if (isMethod(event, "DELETE")) {
//         const body = await readBody(event);
//         return prisma.user.delete({ where: { id: body.id } });
//     }
// });

import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    if (isMethod(event, "GET")) {
        return prisma.user.findMany();
    } else if (isMethod(event, "POST")) {
        const body = await readBody(event);

        // Validation des champs nécessaires
        if (!body.name || !body.email || !body.password || !body.role) {
            return { statusCode: 400, message: "Tous les champs (name, email, password, role) sont requis" };
        }

        try {
            return await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: body.password,
                    role: body.role,  // Assurez-vous que le role est bien transmis
                },
            });
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur:", error);
            return { statusCode: 500, message: "Erreur lors de la création de l'utilisateur" };
        }
    } else if (isMethod(event, "PUT")) {
        const body = await readBody(event);
        const { id, ...data } = body;
        return prisma.user.update({ where: { id: id }, data: data });
    } else if (isMethod(event, "DELETE")) {
        const body = await readBody(event);
        return prisma.user.delete({ where: { id: body.id } });
    }
});



// import prisma from "~/lib/prisma";
// import bcrypt from 'bcryptjs'; // Assurez-vous d'importer bcryptjs
//
// export default defineEventHandler(async (event) => {
//     if (isMethod(event, "GET")) {
//         return prisma.user.findMany();
//     } else if (isMethod(event, "POST")) {
//         const body = await readBody(event);
//
//         // Hacher le mot de passe avant de le stocker
//         const hashedPassword = await bcrypt.hash(body.password, 10);  // 10 est le nombre de salt rounds
//
//         // Créer un utilisateur avec le mot de passe haché
//         return prisma.user.create({
//             data: {
//                 name: body.name,
//                 role: body.role,
//                 email: body.email,
//                 password: hashedPassword  // Stocker le mot de passe haché
//             }
//         });
//     } else if (isMethod(event, "PUT")) {
//         const body = await readBody(event);
//         const { id, ...data } = body;
//
//         if (data.password) {
//             // Si le mot de passe est dans la demande, il faut le hacher
//             data.password = await bcrypt.hash(data.password, 10);
//         }
//
//         return prisma.user.update({
//             where: { id: id },
//             data: data
//         });
//     } else if (isMethod(event, "DELETE")) {
//         const body = await readBody(event);
//         return prisma.user.delete({ where: { id: body.id } });
//     }
// });
