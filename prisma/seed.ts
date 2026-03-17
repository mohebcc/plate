import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const starterPlan = await prisma.subscriptionPlan.upsert({
    where: { name: "Starter" },
    update: {},
    create: {
      name: "Starter",
      setupFeeCents: 29900,
      monthlyFeeCents: 3900,
      supportsCustomDomain: false,
      featuredBoost: false,
      features: ["Hosted page", "Menu", "Online ordering", "Hosting", "Basic updates"]
    }
  });

  const growthPlan = await prisma.subscriptionPlan.upsert({
    where: { name: "Growth" },
    update: {},
    create: {
      name: "Growth",
      setupFeeCents: 49900,
      monthlyFeeCents: 7900,
      supportsCustomDomain: false,
      featuredBoost: false,
      features: ["Custom design options", "Analytics", "SEO settings", "Priority updates"]
    }
  });

  const premiumPlan = await prisma.subscriptionPlan.upsert({
    where: { name: "Premium" },
    update: {},
    create: {
      name: "Premium",
      setupFeeCents: 89900,
      monthlyFeeCents: 12900,
      supportsCustomDomain: true,
      featuredBoost: true,
      features: ["Custom domain support", "Marketing support", "Featured ranking", "Promotions"]
    }
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@plately.us" },
    update: {},
    create: {
      email: "admin@plately.us",
      name: "Plately Admin",
      role: Role.ADMIN
    }
  });

  console.log({ starterPlan: starterPlan.id, growthPlan: growthPlan.id, premiumPlan: premiumPlan.id, admin: admin.id });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
