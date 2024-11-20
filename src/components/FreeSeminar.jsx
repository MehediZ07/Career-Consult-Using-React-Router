
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountDown from "./CountDown";

// eslint-disable-next-line react/prop-types
export default function FreeSeminar() {
const [coundown, setCoundown] = useState(true)
      const [formData, setFormData] = useState({
        name: "",
        phone: "",
      });
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const form = new FormData(e.target);
        const name = form.get("name");
        const phone = form.get("phone");

        
    
        if (name && phone) {
          toast.success(`Registration Successful! ${name}`, {
            position: "top-center",
            autoClose: 2000,
          });
          setFormData({ name: name, phone: phone }); // Reset form fields
          e.target.reset();
          setCoundown(false) // Reset form inputs
        } else {
          toast.error("Please fill out all fields!", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      };
    


  return (
    <div className="flex items-center justify-center  bg-transparent mb-12">
    <div className="bg-white border-[3px] solid border-gray-200 max-w-3xl w-full rounded-xl  flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-8  bg-[#bbe6dd]  bg-opacity-50 text-[#faa2a0] rounded-t-lg md:rounded-t-none  md:rounded-l-lg">
<div>
            <h1 className="text-3xl text-gray-500 md:text-4xl font-bold text-center mb-8">
          Register Now
        </h1>
        {
          coundown ? <CountDown></CountDown> : <div className="flex flex-col justify-start text-center border-[2.5px] solid border-[#faa1a048] py-2 rounded-xl ">
            <h1 className="text-2xl font-bold text-[#feb0af] ">Congratulation!</h1>
            <p className="text-xl text-gray-500 font-semibold mt-4">{formData.name}</p>
            </div>
        }

</div>

      </div>

      {/* Divider */}
      {/* <div className="w-px bg-gray-300"></div> */}

      {/* Right Section */}
      <div className="flex-1 p-8">
      <form onSubmit={handleFormSubmit} className="space-y-4"> {/* Use <form> instead of <div> */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-400 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbe6dd]"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray-400 font-bold mb-2"
          >
            Phone
          </label>
          <input
  type="tel"
  id="phone"
  name="phone"
  placeholder="Enter your phone number"
  pattern="[0-9]+" 
  title="Please enter a valid phone number with digits only."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bbe6dd]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#faa4a3]  text-white font-bold py-2 px-4 rounded-lg hover:bg-[#fe9c9a] "
        >
          Submit
        </button>
      </form>
    </div>
  
    </div>

    {/* Toast Notifications */}
    <ToastContainer />
  </div>
  )
}
