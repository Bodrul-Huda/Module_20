import Blogs from "@/components/Blogs";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();

  let Blogs = await prisma.blog_list.findMany({
    orderBy: { id: "desc" },
  });

  return {
    Blogs: Blogs,
  };
}

const Blog = async () => {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto">
        <h5 className="uppercase font-semibold p-3 text-center text-lg">
          All Blogs
        </h5>
        <hr className="" />
        <Blogs blogs={data["Blogs"]} />
      </div>
    </>
  );
};

export default Blog;
