import BlogForm from "@/components/Board";
import Logout from "@/components/Logout";

const Dashboard = async () => {
  return (
    <>
      <h5 className="uppercase font-semibold p-3 text-center text-lg">
        Dashboard
      </h5>
      <hr className="" />
      <div className="flex place-items-end justify-end p-4 ">
        <Logout />
      </div>
      <h5 className="uppercase font-semibold p-3 text-center text-md">
        Create a Blog
      </h5>

      <BlogForm />
    </>
  );
};

export default Dashboard;
