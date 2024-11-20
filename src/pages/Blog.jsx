// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'


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
 
   if (loading) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div className="max-w-4xl mx-auto p-4">
    <div className="grid grid-cols-1 gap-6">
      {blog.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Published on: {post.publishDate}
            </p>
            <p className="text-sm text-gray-500 mt-1">Author: {post.author}</p>
            <p className="mt-4 text-gray-600 text-justify">
              {post.body}
            </p>
            <div className="mt-4">
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
