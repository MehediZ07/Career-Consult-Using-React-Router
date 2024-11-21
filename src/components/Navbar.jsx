import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import logoIcon from "../assets/Web-logo-removebg-preview.png";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import 'animate.css';
import Headroom from "react-headroom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: pathname === "/" ? "#374151" : "#374151",
             
                  backgroundColor: "#bbe6dd",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: pathname === "/" ? "#374151" : "#374151",
                }
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/statistics"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: pathname === "/" ? "#374151" : "#374151",
        
                  backgroundColor: "#bbe6dd",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: pathname === "/" ? "#374151" : "#374151",
                }
          }
          
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/blog"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: pathname === "/" ? "#374151" : "#374151",
               
                  backgroundColor: "#bbe6dd",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: pathname === "/" ? "#374151" : "#374151",
                }
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/profile"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: pathname === "/" ? "#374151" : "#374151",
                  
                  backgroundColor: "#bbe6dd",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: pathname === "/" ? "#374151" : "#374151",
                }
          }
        >
          My profile
        </NavLink>
      </li>

    </>)

  return (
    
    <Headroom style={{ zIndex: 1000 }}>
      <div  className="bg-opacity-50 backdrop-blur-sm py-2 bg-transparent ">
    
    <div className="flex justify-between items-center  w-11/12 max-w-7xl mx-auto">
      <div className="navbar-start">
    <div className="dropdown ">
      <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
     
                <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-pink-400 bg-opacity-70 backdrop-blur-sm  border-1 solid border-pink-400 rounded-box z-[1] mt-0 w-40 ml-4 p-2 shadow"
          >
            {links}
          </ul>
    </div>
    <button  className="btn btn-ghost bg-transparent hover:bg-transparent "><img 
 style={{ animationDuration: '3s', animationDelay: '0s' , animationIterationCount: 'infinite',}}
    className="h-12 w-16 pt-5 sm:pt-0  sm:w-36 animate__animated animate__flipInX" src={logoIcon} alt="" /></button>
  </div>
 
   <div className="navbar-center hidden  lg:flex">
        <ul className={`menu menu-horizontal px-1 `}>{links}</ul>
      </div>

  <div className="navbar-end">
  <div className="login flex justify-end gap-2 items-center">
        <div className=" ">
          {user && user?.email ? (
         <div className="relative h-full hover:scale-90 group w-fit">
         <Link to='/'>
         <img
             src={user?.photoURL}
             alt="User"
             className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mt-2 mx-auto mb-2 border-4 solid border-[#b5eade]"
           />
         </Link>
         <div
           className="absolute left-1/2 transform -translate-x-1/2 bottom-full h-6 -mb-[.5rem] w-36  bg-[#b5eade] text-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-50"
         >
           <p className="text-center font-bold">{user.displayName}</p>
         </div>
       </div>
          ) : (
            <div className="text-[2.7rem] text-[#faa2a0]"><FaCircleUser></FaCircleUser></div>
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-sm sm:btn-md bg-[#faa2a0] hover:bg-[#f99796]  text-gray-600 font-bold rounded-full ">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-sm  sm:btn-md bg-[#bbe6dd] hover:bg-[#b5eade]  text-gray-600 font-bold rounded-full ">
            Login
          </Link>
        )}
      </div>
  </div> 
    </div>
    </div>
    </Headroom>
  );
};

export default Navbar;
