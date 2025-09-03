import React from 'react'
import TopImage from '../components/TopImage.jsx'

const Blog = () => {

  const blogImages = [
    {
      title : "Runway-Inspired Trends"  ,
      imageSource : "/images/b4 (1).jpg" 
    },
    {
      title : "Must Have Skater Girls Items" ,
      imageSource : "/images/b3.jpg"
    },
    {
      title : "AW20 Menswear Trends" ,
      imageSource : "/images/b6.jpg"
    }
  ];

  return (
    <>
        <TopImage imageSrc = '/images/b19.jpg' mainHeading = "#readmore"
        subText = "Read all case studies about our products" /> 

        {blogImages.map((element, index) => (
          <div 
            key={index} 
            className="my-16 h-auto gap-8 w-full flex flex-col md:flex-row justify-center items-center"
          >
            <img 
              className="rounded-md object-cover h-[260px] w-[90%] md:w-[30%]" 
              src={element.imageSource} 
              alt={`Blog image ${index + 1}`} 
              loading='lazy'
            />
            
            <div className="w-[90%] md:w-[35%] text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black">
                {element.title}
              </h3>
              <p className="my-3 text-gray-500 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi exercitationem ducimus fuga consequuntur molestias, quaerat delectus nemo incidunt voluptas.
              </p>
              <p className="font-semibold text-[16px] text-black">
                continue reading ___
              </p>
            </div>
          </div>
        ))}

    </>
  )
}

export default Blog