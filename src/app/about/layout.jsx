import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "About",
  description: "Well come to Blog Magazine",
};

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
