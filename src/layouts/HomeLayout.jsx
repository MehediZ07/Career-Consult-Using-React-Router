import { Outlet, useLoaderData } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const  data  = useLoaderData();
  const scrollToTopStyle = {
    backgroundColor: "#b5eade",
  };
  return (
    <div className="font-poppins">
   <nav >
        <Navbar></Navbar>
      </nav>
 
      <main className=" pt-5 ">
        <section className="">
          <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
      <ScrollToTop
        smooth
        style={scrollToTopStyle}
        className={` rounded-xl w-12 h-12 flex justify-center items-center`}
      />
    </div>
  );
};

export default HomeLayout;
