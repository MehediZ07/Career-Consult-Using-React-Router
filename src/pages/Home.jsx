// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import HappyClients from "../components/HappyClients";
import OurServices from '../components/OurServices';
import MuhammadYunus from '../assets/Muhammad-Yunus.webp'
import BillGets from '../assets/Bill Gets.webp'
import Obama from '../assets/obama.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import { useLoaderData } from 'react-router-dom';

import FreeSeminar from '../components/FreeSeminar';
import { Helmet } from 'react-helmet';

register();


const people = [
  {
    name: "Dr. Muhammad Yunus",
    image: MuhammadYunus,
    quote: "Poverty is not created by the poor; it is created by the system. Empower people with opportunities, and the world will change."
  },

  {
    name: "Bill Gates",
    image: BillGets,
    quote: "Your most unhappy customers are your greatest source of learning. Success is built on how you handle failure and adapt to change."
  },
  {
    name: "Barack Obama",
    image: Obama,
    quote: "The future rewards those who press on. It may not always be easy, but through resilience and hope, progress becomes inevitable."
  },
];


export default function Home() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const targetSectionRef = useRef(null);

  const handleScroll = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const Counselors = useLoaderData();
  console.log(Counselors)

  const [showAll, setShowAll] = useState(false);


  const counselorsData = showAll ? Counselors : Counselors.slice(0, 2);

    useEffect(() => {
        fetch('/Clients.json')
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

   
    if (loading || !data || !Counselors || !counselorsData) return <span className="loading loading-bars loading-lg"></span>;

    return ( 
        <div className='overflow-hidden'>
          <Helmet>
        <title>{`Home | Career Consult`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
            <div
  className="hero min-h-[30rem]  "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/4pnh766/DALL-E-2024-11-20-00-23-37-A-bustling-urban-cityscape-with-countless-people-rushing-in-all-direction.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60 backdrop-blur-sm"> </div>
  <div className="hero-content text-neutral-content text-center grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
    <div className="max-w-md lg:translate-x-16 mx-auto">
      <h1 className="mb-5 text-5xl font-bold">We Believe In You</h1>
      <p className="mb-5">
      Do what you want to do, never get back step, be focused, set the career goal, never feel down, always be confident.
      </p>
      <button onClick={handleScroll} className="btn text-white bg-[#fe9290] hover:bg-[#fc9a98]">Get Started</button>
    </div>
    <div className="-translate-x-44  lg:-translate-x-60 mx-auto py-10 overflow-hidden">
  <Swiper
    effect={"cards"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    {people.map((card, index) => (
      <SwiperSlide
        key={index}
        className="!w-[250px] !h-[250px] sm:!w-[350px] sm:!h-[350px]"
      >
  <div className="card relative h-full w-full bg-base-100 shadow-xl rounded-lg overflow-hidden">
  
    <img
      src={card.image}
      alt={card.serviceName}
      className="!w-full !h-full object-cover"
    />
   
    <div className="card-body absolute bottom-0 pb-5 left-0 pl-5 w-full p-2 text-center backdrop-blur-sm py-2 bg-transparent text-gray-200">
      <h2 className="card-title text-sm">{card.name}</h2>
      <p className="text-xs text-start">{card.quote}</p>
    </div>
  </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  </div>
</div>
   

           {/* Counsilor Section */}

{
  counselorsData?(<div>
    <div className='max-w-3xl mx-auto w-[90%]'>
            <h1 className='text-center text-[#aaebdc]   text-2xl py-3 px-6 rounded-lg w-fit mt-10 mx-auto font-semibold'>Meet Our Counselors</h1>
            <p className="mb-5 text-center text-gray-500">
            Our counselors are highly experienced, bringing extensive practical and professional expertise. They have guided countless individuals across various industries, helping them achieve their career goals with personalized strategies and actionable insights.
      </p>
            </div>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 w-11/12 max-w-7xl mx-auto mt-16'>
            {
              counselorsData.map((Counselor)=>(
           
       
                <div key={Counselor.id} className="max-w-[35rem] h-[22rem] sm:h-72  mx-auto bg-base-100 shadow-xl flex  rounded-lg">
           
                      <div className="w-[65%] p-4">
                        <h2 className="card-title text-xl mb-2 font-bold text-[#fdb3b1]">{Counselor.name}</h2>
                        <p className="text-sm text-gray-500 italic">{Counselor.degree}</p>
                        <p className="text-sm text-gray-500">{Counselor.profession}</p>
                        <p className="mt-2 text-gray-700 text-sm">{Counselor.background}</p>
                        <div className="mt-2">
                          {Counselor.expertise.split(', ').map((skill, idx) => (
                            <span key={idx} className="mx-1 badge text-gray-600 bg-[#bbe6dd] ">{skill}</span>
                          ))}
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between items-center">
               
                          
                          </div>
                        </div>
                      
                      </div>
                      <figure className='w-[35%] h-full'>
                        <img src={Counselor.image} alt={Counselor.name} className=" h-full w-full object-cover rounded-r-lg " />
                      </figure>
                    </div>
                    
                
              ))
            }
             <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 w-fit mx-auto col-span-1 lg:col-span-2 bg-[#faa2a0] text-white font-semibold rounded hover:bg-[#fe9593]"
        >
          {showAll ? "View Less" : "Meet All Consultant"}
        </button>
            </div>
</div>):(
   <span className="loading loading-bars loading-lg"></span>
)
}

{/* Our service  */}
{
  data && counselorsData ?(<div ref={targetSectionRef}>
    <div className='max-w-3xl mx-auto w-[90%]'>
    <h1 className='text-center text-[#aaebdc]  text-2xl py-3 px-6 rounded-lg w-fit mt-10 mx-auto font-semibold'>Our Services</h1>
    <p className="mb-5 text-center text-gray-500">
    Our counseling services are designed to provide personalized career guidance, practical advice, and strategic planning. Whether you're exploring career options, transitioning industries, or aiming to achieve specific professional goals, our expert counselors are here to support and empower you every step of the way.
</p>
    </div>
   <OurServices></OurServices>
   </div>   ):(
      <span className="loading loading-bars loading-lg"></span>
   )
}       


{/* Happy clients  */}
            {data ? (
                <section className="mx-auto">
                    <div className='max-w-3xl mx-auto w-[90%]'>
            <h1 className='text-center text-[#fec1bf]  text-2xl py-3 px-6 rounded-lg w-fit mt-10 mx-auto font-semibold'>Our Happy Clients</h1>
            <p className="mb-5 text-center text-gray-500">
            We believe in delivering excellence, and nothing speaks louder than the feedback we receive from our valued clients. We take immense pride in helping individuals and businesses achieve their goals, and our clients' success is our top priority. Here’s what they have to say about their experience with us.
      </p>
            </div>
                    <HappyClients data={data} />
                </section>

            ) : (
                <span className="loading loading-bars loading-lg"></span>
            )}

                 {/* Free Seminar  */}

                 <div className='w-11/12 max-w-7xl mx-auto' >
                 <div className='max-w-lg mx-auto w-[90%]'>
            <h1 className='text-center text-[#fec1bf]  text-2xl py-3 px-6 rounded-lg w-fit mt-10 mx-auto font-semibold'>Free Seminar For You</h1>
            <p className="mb-5 text-center text-gray-500">
            Join with us, don't get late, there is limitation of available seat, so don't be late quickly complete your registration.
      </p>
            </div>
              <FreeSeminar></FreeSeminar>
            </div>
            
        </div>
        
    );
}


