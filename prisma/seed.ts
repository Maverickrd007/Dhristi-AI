import { business, clients, products, staff, users } from "@/lib/demo-data";

async function seed() {
  console.log("Seed preview for Drishti AI");
  console.log({ business, users: users.length, products: products.length, clients: clients.length, staff: staff.length });
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
