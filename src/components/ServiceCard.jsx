// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
 // Import from 'swiper/modules'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
register();

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



{/* Category */}
<p className="text-sm text-gray-600 ">
  <span className="font-semibold">Category: </span>{card.category}
</p>

{/* Pricing */}
<p className="text-sm text-gray-600 ">
  <span className="font-semibold">Pricing: </span>${card.price}
</p>

{/* Short Description */}
<p className="text-sm text-gray-600 ">
  {card.description.slice(0, 80)}...{" "}
  <Link to={`/details/${card.id}`} className="text-primary">
          Read More
        </Link>
</p>
    </div>
  </div>
    // <div className={`cart-container max-w-3xl mx-auto mb-8 sticky top-${20}`}>
    //   <h2>🛒 Your Cart</h2>
      
    //   <div className="service-details">
    //     <h3>{single.serviceName}</h3>
    //     <p><strong>Category:</strong> {single.category}</p>
    //     <p><strong>Counselor:</strong> {single.counselor}</p>
    //     <p><strong>Rating:</strong> ⭐ {single.rating}</p>
    //   </div>

    //   <div className="service-description">
    //     <h4>Description:</h4>
    //     <p>{single.description}</p>
    //   </div>

    //   <div className="service-summary">
    //     <h4>Service Summary:</h4>
    //     <table>
    //       <tbody>
    //         <tr>
    //           <td><strong>Service</strong></td>
    //           <td>{single.serviceName}</td>
    //         </tr>
    //         <tr>
    //           <td><strong>Price</strong></td>
    //           <td>{single.price}</td>
    //         </tr>
    //         <tr>
    //           <td><strong>Scheduled Time</strong></td>
    //           <td>{single.duration}</td>
    //         </tr>
    //         <tr>
    //           <td><strong>Counselor</strong></td>
    //           <td>{single.counselor}</td>
    //         </tr>
    //         <tr>
    //           <td><strong>Rating</strong></td>
    //           <td>⭐ {single.rating}</td>
    //         </tr>
    //         <tr>
    //           <td><strong>Additional Info</strong></td>
    //           <td>{single.additionalInfo}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>

    //   <div className="learn-more">
    //     <p><strong>Learn More:</strong> <a href={single.learnMoreLink}>Click here</a></p>
    //   </div>

    //   <div className="checkout">
    //     <button className="checkout-btn">Proceed to Checkout</button>
    //   </div>
    // </div>
  )
}
