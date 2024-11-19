// eslint-disable-next-line no-unused-vars
import React from 'react'
import Marquee from 'react-fast-marquee';
import ClientCard from './ClientCard';

function componentName ({data}) {
    console.log(data)

  return (
    <div className="gap-2 h-auto items-center -z-10 p-2">
      <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={100} className="space-x-0">
        {
          // eslint-disable-next-line react/prop-types
          data.map((single) => {
            return <ClientCard  key={single.id} single={single} />;
          })
        }
      </Marquee>
    </div>
  );
}

export default componentName
