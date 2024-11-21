
import { useLoaderData } from 'react-router-dom';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
export default function Statistics() {
    const data = useLoaderData();
  return (
    <div>
     <div className='max-w-3xl mx-auto w-[90%]'>
            <h1 className='text-center text-[#aaebdc]   text-2xl  px-6 rounded-lg w-fit mt-4 mx-auto font-semibold'>See all the Services ratting comparison.</h1>
            <p className="mb-5 text-center mt-3 text-gray-500">
            This rating reflects the invaluable feedback and trust of our clients. Each review highlights the positive impact our services have made on their journeys, showcasing our commitment to excellence. We strive to deliver personalized guidance and solutions, ensuring every client feels empowered and confident in achieving their goals. Your feedback inspires us to continually improve and provide even greater value. Thank you for choosing us as your trusted partner in success!
      </p>
            </div>

         
      <div className="max-w-7xl mx-auto my-12 overflow-x-auto">
        <ResponsiveContainer width={180* data.length} height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="serviceName" />
            <YAxis 
            domain={[3.25, 'dataMax']}
            ticks={[ 3.5, 3.75, 4, 4.25, 4.5, 4.75, 4.75, 5]} />
            <Tooltip />
            <Bar dataKey="rating" barSize={30} fill="#faa2a0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
