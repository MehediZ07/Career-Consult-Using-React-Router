// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules"; // Import from 'swiper/modules'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
register();

export default function OurServices() {
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
   
    if (loading) return <span className="loading loading-bars loading-lg"></span>;

    return (
        <div>
            {data ?     
            (
        //         <section className="mx-auto relative">
        //             {
        //   // eslint-disable-next-line react/prop-types
        //   data.map((single) => {
        //     return <ServiceCard  key={single.id} single={single} />;
        //   })
        // }
                    
        //         </section>




<div className="max-w-screen-lg mx-auto py-10">
  <Swiper
    effect={"coverflow"}
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
    {data.map((card, index) => (
      <SwiperSlide
        key={index}
        className="!w-[200px] !h-[200px] md:!w-[400px] md:!h-[400px] rounded-2xl border-[3px] solid border-gray-200 p-[.10rem]" 
      >
     <ServiceCard card={card} ></ServiceCard>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



            ) : (
                <span className="loading loading-bars loading-lg"></span>
            )}
          
        </div>
    );
}
