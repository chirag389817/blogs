import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

type TPrismaClient = PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    DefaultArgs
> | null;

var prismaClient: TPrismaClient = null;

export function getPrismaClient(): TPrismaClient {
    if (prismaClient === null) prismaClient = new PrismaClient();
    return prismaClient;
}
