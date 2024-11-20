import { useEffect, useState } from "react";
import { useNavigate, useParams , } from "react-router-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import logoIcon from "../assets/Web-logo-removebg-preview.png";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import 'animate.css';
import Headroom from "react-headroom";
import Footer from "./Footer";

export default function ServiceDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(data)
  useEffect(() => {
      fetch('/Data.json') // Correct path to access the file
          .then(response => {
              if (!response.ok) {
                  throw new Error("Failed to fetch");
              }
              return response.json();
          })
          .then(json => {
              setData(json);
              setLoading(false);
          })
          .catch(err => {
              console.error("Error fetching data:", err);
              setLoading(false);
          });
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back one step in the history
  };

  const { user, logOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  const links = (
    <>
    <li>
      <button
        className="navlink ml-1 bg-[#ffffffa0]"
       onClick={handleGoBack}

      >
        Home
      </button>
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
        to="/dashboard"
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
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        className="navlink ml-1"
        to="/Policy"
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
        Policies
      </NavLink>
    </li>
    <li>
      <NavLink
        className="navlink ml-1"
        to="/login"
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
        Login
      </NavLink>
    </li>
  </>)
 
  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  // Parse the ID from URL and find the matching service
  const idInt = parseInt(id, 10);
  const service = data.find((item) => item.id === idInt);

  if (!service) {
    return <p className="text-red-500">Service not found</p>;
  }


  return (
    <div>
    <nav>
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
    <Link to = "/"  className="btn btn-ghost bg-transparent hover:bg-transparent "><img 
 style={{ animationDuration: '3s', animationDelay: '0s' , animationIterationCount: 'infinite',}}
    className="h-12 w-16 pt-5 sm:pt-0  sm:w-36 animate__animated animate__flipInX" src={logoIcon} alt="" /></Link>
  </div>
 
   <div className="navbar-center hidden  lg:flex">
        <ul className={`menu menu-horizontal px-1 `}> 
        {links}
    </ul>
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
    </nav>

    <div className="flex justify-center p-4 -mt-2 mb-12">
      <div className="max-w-sm md:max-w-2xl lg:max-w-3xl w-full rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-t-lg" 
          src={service.image} 
          alt={service.serviceName} 
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800">{service.serviceName}</h3>
          <p className="text-base text-indigo-600 font-medium mb-2">{service.category}</p>
          <p className="text-gray-700 mb-4">{service.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center">
              <span className="font-bold text-lg text-indigo-500">{service.price}</span>
              <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                {service.rating} ★
              </span>
            </span>

            <span className="text-xs text-gray-400">{service.duration}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600">Counselor: {service.counselor}</span>
              <button className="text-sm px-2 py-1 -mb-12 rounded-full bg-[#a5e9da62] text-indigo-600 hover:font-medium " onClick={handleGoBack}>Go Back</button>
          </div>

          {service.additionalInfo && (
            <div className="mt-3 text-xs text-gray-500 italic">{service.additionalInfo}</div>
          )}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}



 