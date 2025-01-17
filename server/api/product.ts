// // import prisma from "~/lib/prisma";
// //
// // export default defineEventHandler(async (event) => {
// //     if (isMethod(event, "GET")) {
// //         return prisma.product.findMany();
// //     } else if (isMethod(event, "POST")) {
// //         const body = await readBody(event);
// //         return prisma.product.create({ data: body });
// //     } else if (isMethod(event, "PUT")) {
// //         const body = await readBody(event);
// //         const { id, ...data } = body;
// //         return prisma.product.update({ where: { id: id }, data: data });
// //     } else if (isMethod(event, "DELETE")) {
// //         const body = await readBody(event);
// //         return prisma.product.delete({ where: { id: body.id } });
// //     }
// // });
//
// import prisma from "~/lib/prisma";
//
// export default defineEventHandler(async (event) => {
//     if (isMethod(event, "GET")) {
//         // Récupérer tous les produits
//         try {
//             return await prisma.product.findMany();
//         } catch (error) {
//             console.error("Erreur lors de la récupération des produits:", error);
//             return { statusCode: 500, message: "Erreur lors de la récupération des produits" };
//         }
//     } else if (isMethod(event, "POST")) {
//         // Créer un nouveau produit
//         const body = await readBody(event);
//         try {
//             return await prisma.product.create({ data: body });
//         } catch (error) {
//             console.error("Erreur lors de la création du produit:", error);
//             return { statusCode: 500, message: "Erreur lors de la création du produit" };
//         }
//     } else if (isMethod(event, "PUT")) {
//         // Mettre à jour un produit existant
//         const body = await readBody(event);
//         const { id, ...data } = body;
//         try {
//             return await prisma.product.update({ where: { id: id }, data: data });
//         } catch (error) {
//             console.error("Erreur lors de la mise à jour du produit:", error);
//             return { statusCode: 500, message: "Erreur lors de la mise à jour du produit" };
//         }
//     } else if (isMethod(event, "DELETE")) {
//         // Suppression d'un produit, l'ID est passé dans l'URL, pas dans le corps
//         const { id } = getQuery(event); // Récupération de l'ID depuis les paramètres de l'URL
//         try {
//             if (!id) {
//                 return { statusCode: 400, message: "ID du produit manquant" };
//             }
//             return await prisma.product.delete({ where: { id: Number(id) } });
//         } catch (error) {
//             console.error("Erreur lors de la suppression du produit:", error);
//             return { statusCode: 500, message: "Erreur lors de la suppression du produit" };
//         }
//     }
// });
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    if (isMethod(event, "GET")) {
        // Récupérer tous les produits
        try {
            return await prisma.product.findMany();
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
            return { statusCode: 500, message: "Erreur lors de la récupération des produits" };
        }
    } else if (isMethod(event, "POST")) {
        // Créer un nouveau produit
        const body = await readBody(event);
        try {
            return await prisma.product.create({ data: body });
        } catch (error) {
            console.error("Erreur lors de la création du produit:", error);
            return { statusCode: 500, message: "Erreur lors de la création du produit" };
        }
    } else if (isMethod(event, "PUT")) {
        // Mettre à jour un produit existant
        const body = await readBody(event);
        const { id, ...data } = body;
        try {
            return await prisma.product.update({ where: { id: id }, data: data });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du produit:", error);
            return { statusCode: 500, message: "Erreur lors de la mise à jour du produit" };
        }
    } else if (isMethod(event, "DELETE")) {
        // Suppression d'un produit, l'ID est passé dans le corps de la requête
        const body = await readBody(event); // Récupérer l'ID depuis le corps
        const productId = body.id;

        try {
            if (!productId) {
                return { statusCode: 400, message: "ID du produit manquant" };
            }
            return await prisma.product.delete({ where: { id: Number(productId) } });
        } catch (error) {
            console.error("Erreur lors de la suppression du produit:", error);
            return { statusCode: 500, message: "Erreur lors de la suppression du produit" };
        }
    }
});
