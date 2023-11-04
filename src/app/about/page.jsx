import Team from "@/components/Team";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();

  let Team = await prisma.team.findMany({
    orderBy: { id: "desc" },
  });

  return {
    Team: Team,
  };
}

const About = async () => {
  const data = await getData();
  return (
    <>
      <div className="container mx-auto">
        <h5 className="uppercase font-semibold p-3 text-center text-lg">
          About Us
        </h5>
        <hr className="" />
        <h1 className="uppercase text-blue-800 font-bold p-3 text-2xl">
          Who are We
        </h1>
        <p className="p-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum
          dui faucibus in ornare quam viverra orci. Velit aliquet sagittis id
          consectetur. Varius quam quisque id diam vel quam elementum pulvinar.
          Orci phasellus egestas tellus rutrum tellus pellentesque eu. Nisl vel
          pretium lectus quam id leo. Est placerat in egestas erat. Ultricies mi
          quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam
          quis enim lobortis scelerisque. Diam donec adipiscing tristique risus
          nec. Odio pellentesque diam volutpat commodo sed egestas egestas.{" "}
        </p>
        <h1 className="uppercase text-blue-800 font-bold p-3 text-xl">
          We&#8217;r different then the rest
        </h1>
        <p className="p-3 text-sm">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam
          viverra orci. Velit aliquet sagittis id consectetur. Varius quam
          quisque id diam vel quam elementum pulvinar. Orci phasellus egestas
          tellus rutrum tellus pellentesque eu. Nisl vel pretium lectus quam id
          leo. Est placerat in egestas erat. Ultricies mi quis hendrerit dolor
          magna eget est lorem ipsum. Etiam dignissim diam quis enim lobortis
          scelerisque. Diam donec adipiscing tristique risus nec. Odio
          pellentesque diam volutpat commodo sed egestas egestas. Consequat
          semper viverra nam libero justo laoreet sit amet cursus. Id velit ut
          tortor pretium viverra suspendisse. Ut venenatis tellus in metus
          vulputate eu. Sociis natoque penatibus et magnis. In ante metus dictum
          at tempor commodo ullamcorper a lacus. Sed enim ut sem viverra
          aliquet. Imperdiet proin fermentum leo vel orci porta non.{" "}
        </p>
        <Team team={data["Team"]} />
      </div>
    </>
  );
};

export default About;
