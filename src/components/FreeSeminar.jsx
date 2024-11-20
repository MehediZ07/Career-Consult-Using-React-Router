
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountDown from "./CountDown";

// eslint-disable-next-line react/prop-types
export default function FreeSeminar() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
      });
    
      const handleChange = (e) => {
        // We don't need preventDefault here, as we're just updating state
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        if (formData.name && formData.phone) {
          toast.success("Registration Successful!", {
            position: "top-center",
            autoClose: 2000,
          });
          setFormData({ name: "", phone: "" }); // Reset form fields
        } else {
          toast.error("Please fill out all fields!", {
            position: "top-center",
            autoClose: 2000,
          });
        }};
 
    


  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-blue-500 text-white rounded-l-lg">
<div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Register Now
        </h1>
 <CountDown></CountDown>
</div>

      </div>

      {/* Divider */}
      <div className="w-px bg-gray-300"></div>

      {/* Right Section */}
      <div className="flex-1 p-8">
      <form onSubmit={handleSubmit} className="space-y-4"> {/* Use <form> instead of <div> */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
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
