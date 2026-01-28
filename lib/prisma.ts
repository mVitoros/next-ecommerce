import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
  adapter,
  log: [
    { emit: "event", level: "query" },
    { emit: "stdout", level: "error" },
    { emit: "stdout", level: "warn" },
  ],
});

prisma.$on("query", (e) => {
  if (e.query.trim().toLowerCase().startsWith("select")) return;

  const type = e.query.trim().split(" ")[0].toUpperCase();

  console.log(`\n--- Prisma: ${type} ---`);
  console.log("Query:", e.query);
  console.log("Params:", e.params);
  console.log("Duration:", e.duration + "ms");
  console.log("--------------------");
});

export { prisma };
