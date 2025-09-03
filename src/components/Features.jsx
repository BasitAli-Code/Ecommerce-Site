import React from 'react'

const Features = () => {
  const features = [
    { src: "/images/f1.png", bg: "bg-[#fddde4]", text: "Free Shipping" },
    { src: "/images/f2.png", bg: "bg-[#cdebbc]", text: "Online Order" },
    { src: "/images/f3.png", bg: "bg-[#d1e8f2]", text: "Save Money" },
    { src: "/images/f4.png", bg: "bg-[#cdd4f8]", text: "Promotions" },
    { src: "/images/f5.png", bg: "bg-[#f6dbf6]", text: "Happy Sell" },
    { src: "/images/f6.png", bg: "bg-[#fff2e5]", text: "24/7 Support" },
  ];

  return (
    <>
      <div className="my-20 flex flex-wrap justify-evenly items-center">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg"
          >
            <img src={feature.src} alt={`Feature image ${index + 1}`} loading="lazy" />
            <button className={`rounded w-[70%] text-[#088178] ${feature.bg}`}>
              {feature.text}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
