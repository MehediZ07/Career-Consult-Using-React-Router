// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';


export default function Blog() {


   const [blog, setBlog] = useState({});
   const [loading, setLoading] = useState(true);
   useEffect(() => {
       fetch('/Blog.json') // Correct path to access the file
           .then(response => {
               if (!response.ok) {
                   throw new Error("Failed to fetch");
               }
               return response.json();
           })
           .then(json => {
               setBlog(json);
               setLoading(false);
           })
           .catch(err => {
               console.error("Error fetching data:", err);
               setLoading(false);
           });
   }, []);

   const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
 
   if (loading) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div>
             <Helmet>
        <title>{`Blog | Career Consult`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
         <div className='max-w-3xl mx-auto w-[90%]'>
            <h1 className="mb-5 text-center mt-3 text-gray-500" > <span className='text-center text-[#fec1bf]    text-2xl rounded-lg w-fit mt-4 mx-auto font-semibold'>Explore our extensive collection of blogs,</span> crafted to inspire, educate, and guide you. From expert career advice and industry insights to practical tips and motivational stories, our blogs cover a wide range of topics designed to empower your journey!</h1>
    
            </div>

            <div className="max-w-4xl mx-auto p-4">
    <div className="grid grid-cols-1 gap-6">
      {blog.map((post) => (
        <div
          key={post.id}
          className="bg-white  border-2 solid border-gray-200 rounded-xl overflow-hidden "
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold text-[#8fe1ce]">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Published on: {post.publishDate}
            </p>
            <p className="text-sm text-gray-500 mt-1">Author: {post.author}</p>
            <p className="text-gray-700 leading-relaxed">
            {expanded[post.id]
              ? post.body // Show full text if expanded
              : `${post.body.substring(0, 500)}...`} <button
              className=" text-blue-500 font-medium hover:underline"
              onClick={() => toggleReadMore(post.id)}
            >
              {expanded[post.id] ? "Show Less" : "Read More"}
            </button>
          </p>
          
            <div className="mt-4">
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>

  )
}


