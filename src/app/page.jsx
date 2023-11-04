import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import NavBar from "@/components/Navbar";
import Popular from "@/components/Popular";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();

  let Slider = await prisma.blog_list.findMany({ where: { type: "Science" } });
  let Featured = await prisma.blog_list.findMany({
    where: { type: "Latest" },
  });
  let Latest = await prisma.blog_list.findMany({ where: { type: "Latest" } });
  let Popular = await prisma.blog_list.findMany({ where: { type: "Popular" } });
  let Blogs = await prisma.blog_list.findMany({
    orderBy: { id: "desc" },
    take: 6,
  });

  return {
    Slider: Slider,
    Featured: Featured,
    Popular: Popular,
    Latest: Latest,
    Blogs: Blogs,
  };
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Hero featured={data["Featured"]} slider={data["Slider"]} />
        <div className="container mt-5">
          <div>
            <h5 className="uppercase font-semibold p-3">LATEST</h5>
            <hr className="" />
            <div>
              <Latest latest={data["Latest"]} />
            </div>
          </div>
          <div>
            <h5 className="uppercase font-semibold p-3">Popular</h5>
            <hr className="" />
            <div>
              <Popular popular={data["Popular"]} />
            </div>
          </div>
          <div>
            <h5 className="uppercase font-semibold p-3">Blogs</h5>
            <hr className="" />
            <div>
              <Blogs blogs={data["Blogs"]} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
