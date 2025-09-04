import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import TopImage from "../components/TopImage";

const ContactPage = () => {
  const profileImages = ["/images/1.png", "/images/2.png", "/images/3.png"];

  return (
    <>
      <TopImage
        imageSrc="/images/banner.png"
        mainHeading="#Let's_talk"
        subText="Leave a message. We love to hear from you"
      />

      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-8 w-full h-auto">
        <div className="w-[80%] md:w-[40%]">
          <p className="text-[16px] text-gray-500">Get in Touch</p>
          <h3 className="my-3 text-black text-2xl md:text-3xl tracking-wide font-semibold">
            Visit one of our agency locations or contact us today
          </h3>
          <h4 className="tracking-wide text-black text-[16px] font-semibold">
            Head office
          </h4>
          <p className="mt-3 text-[16px] tracking-wide text-gray-500">
            <FaMapMarkerAlt className="inline" /> 56 street Main Road
            Darogawala,Lahore
          </p>
          <p className="mt-2 text-[16px] tracking-wide text-gray-500">
            <FaEnvelope className="inline" /> contact@example.com
          </p>
          <p className="mt-2 text-[16px] tracking-wide text-gray-500">
            <FaPhone className="inline" /> contact@example.com
          </p>
          <p className="my-2 text-[16px] tracking-wide text-gray-500">
            <FaClock className="inline" /> Monday to Saturday: 9:00am to 16:00pm
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.7842124247613!2d74.26568850874898!3d31.447607080250844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190175cfde9675%3A0x1d00b57097fbebd8!2sUCP%20Sports%20Complex%20%26%20Gym!5e0!3m2!1sen!2s!4v1756835786453!5m2!1sen!2s"
          className="w-[85%] md:w-[40%] rounded-lg"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="my-25 flex flex-col md:flex-row justify-center items-center gap-8 w-full h-auto">
        <div className="my-10 flex flex-col items-start gap-4 w-[90%] md:w-[40%]">
          <p className="text-gray-500 text-[16px]">Leave a message</p>
          <h3 className="text-black text-2xl tracking-wide font-semibold md:text-3xl">
            We love to hear from you
          </h3>
          <input
            className="outline-none border border-gray-400 w-[100%] md:w-[90%] rounded-md py-1 px-3"
            type="text"
            placeholder="Your name"
          />
          <input
            className="outline-none border border-gray-400 w-[100%] md:w-[90%] rounded-md py-1 px-3"
            type="text"
            placeholder="E-mail"
          />
          <input
            className="outline-none border border-gray-400 w-[100%]  md:w-[90%] rounded-md py-1 px-3"
            type="text"
            placeholder="Subject"
          />
          <textarea
            name="userMessage"
            rows="6"
            cols="64"
            placeholder="Your Message"
            className="outline-none w-[100%] md:w-[90%] border border-gray-400 rounded-lg py-2 px-3"
          ></textarea>

          <button className="transition-all duration-300 bg-[#088178] text-[#fff] cursor-pointer rounded-md shadow-lg px-6 py-3 hover:bg-white hover:text-black">
            Submit
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 w-[90%] md:w-[40%]">
          {profileImages.map((src, index) => (
            <div
              key={index}
              className="w-[70%] flex items-center gap-6 justify-center"
            >
              <img src={src} alt="person-profile-pic" />
              <div className="">
                <p className="tracking-wide text-xl text-black">John Doe</p>
                <p className="tracking-wide text-[16px] text-gray-500">
                  Senior Marketing Manager
                </p>
                <p className="tracking-wide text-[16px] text-gray-500">
                  Phone: +000 123 0178
                </p>
                <p className="tracking-wide text-[16px] text-gray-500">
                  Email: contact@example.com
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
