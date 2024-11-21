// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
 // Import from 'swiper/modules'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
register();

// eslint-disable-next-line react/prop-types
export default function ServiceCard({card}) {
    
  return (
    <div className=" text-start relative h-full w-full bg-base-100 shadow-xl rounded-lg overflow-hidden">
    <img
      src={card.image}
      alt={card.serviceName}
      className="!w-full !h-full object-cover rounded-xl"
    />
    <div className="card-body absolute bottom-0 pb-5 left-0 pl-5 w-full p-2  text-start backdrop-blur-sm py-2 bg-[#d5ebe6ad] rounded-b-lg ">
    <h2 className="text-xl font-bold text-gray-600  w-fit p-1 rounded-xl">{card.serviceName}</h2>

<p className="text-sm text-gray-600 ">
  <span className="font-semibold">Category: </span>{card.category}
</p>

<p className="text-sm text-gray-600 ">
  <span className="font-semibold">Pricing: </span>${card.price}
</p>

<p className="text-sm text-gray-600 ">
  {card.description.slice(0, 80)}...{" "}
  <Link to={`/details/${card.id}`} className="text-primary">
          Read More
        </Link>
</p>
    </div>
  </div>
   
  )
}
