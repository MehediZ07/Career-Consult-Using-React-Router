// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line react/prop-types
export default function ClientCard({single}) {

    // eslint-disable-next-line react/prop-types
    const {image, name, profession, rating, location} = single;
  return (
    <div className="w-44 p-4 ml-5 h-80 pt-8 -z-10 bg-[#bbe6dd] border-[5px] solid border-[#ffdad9] rounded-full text-center">
    <img
      src={image}
      alt={name}
      className="w-28 h-28 mx-auto rounded-full  object-cover mb-4"
    />
    <h2 className="text-lg font-bold text-gray-600">{name}</h2>
    <p className="text-gray-500 text-sm">{profession}</p>
    <hr className="my-3 border-gray-400" />
    <p className="text-gray-500 text-sm"><span className='font-bold'>Rating</span> {rating}</p>
    <p className="text-gray-500 text-sm">{location}</p>
    
  </div>
  
  )
}
