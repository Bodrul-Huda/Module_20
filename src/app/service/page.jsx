import ServiceSection from "@/components/Service";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();

  let Services = await prisma.service.findMany({
    orderBy: { id: "desc" },
  });

  return {
    Services: Services,
  };
}

const Service = async () => {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto">
        <h5 className="uppercase font-semibold p-3 text-center text-lg">
          Our Services
        </h5>
        <hr className="" />
        <ServiceSection service={data["Services"]} />
      </div>
    </>
  );
};

export default Service;
