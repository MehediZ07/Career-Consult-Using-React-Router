import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNav;




// npm i @coder-shubh/react-native-image-slider react-native-vector-icons


// import React from 'react';
// import ImageSlider from '@coder-shubh/react-native-image-slider';

// const slides = [
//   {
//     image: 'https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg',
//     serviceName: 'Therapy Session',
//     category: 'Mental Health',
//     pricing: '$100/hr',
//     counselorName: 'John Doe',
//     learnMoreLink: '#',
//   },
//   {
//     image: 'https://cdn.pixabay.com/photo/2022/11/22/05/34/landscape-7802492_640.jpg',
//     serviceName: 'Nutrition Counseling',
//     category: 'Health & Wellness',
//     pricing: '$75/hr',
//     counselorName: 'Jane Smith',
//     learnMoreLink: '#',
//   },
//   {
//     image: 'https://cdn.pixabay.com/photo/2022/11/11/03/02/landscape-7793199_640.jpg',
//     serviceName: 'Yoga Therapy',
//     category: 'Physical Wellness',
//     pricing: '$50/hr',
//     counselorName: 'Robert Green',
//     learnMoreLink: '#',
//   },
//   {
//     image: 'https://cdn.pixabay.com/photo/2022/10/21/10/11/sunset-7525377_640.jpg',
//     serviceName: 'Life Coaching',
//     category: 'Personal Development',
//     pricing: '$120/hr',
//     counselorName: 'Emily Johnson',
//     learnMoreLink: '#',
//   },
// ];

// const App = () => {
//   return (
//     <ImageSlider
//       testID="imageSlider_testID"
//       images={slides.map((slide) => slide.image)} // Pass only the images
//       renderItem={({ index }) => {
//         const slide = slides[index];
//         return (
//           <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
//             <img
//               src={slide.image}
//               alt={slide.serviceName}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-2xl font-semibold text-gray-800">{slide.serviceName}</h3>
//               <p className="text-sm text-gray-600 mt-1">Category: {slide.category}</p>
//               <p className="text-sm text-gray-600">Pricing: {slide.pricing}</p>
//               <p className="text-sm text-gray-600 mb-4">Counselor: {slide.counselorName}</p>
//               <a
//                 href={slide.learnMoreLink}
//                 className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         );
//       }}
//       imageHeight={250}
//       dotSize={10}
//       dotColor="silver"
//       activeDotColor="blue"
//       showNavigationButtons={true}
//       showIndicatorDots={true}
//       imageLabel={false} // Optional: Disable the default label
//       autoSlideInterval={5000}
//       containerStyle={{ marginBottom: 20 }}
//       radius={5}
//     />
//   );
// };

// export default App;
