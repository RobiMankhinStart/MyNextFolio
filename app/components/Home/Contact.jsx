import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="py-7">
      <div className="container">
        <div className="mainDiv flex w-[900px] justify-between">
          <div>
            <h3 className="text-3xl text-center font-bold">
              Leave me your info
            </h3>
            <form className="bg-white flex flex-col gap-6 rounded-md p-7 mt-12">
              <div className="flex flex-col gap-2">
                <label className="text-[#767676]" htmlFor="fullName">
                  Your Full Name ( Required)
                </label>
                <input
                  className="bg-[#F0F0F6] w-[400px] py-2 px-1 rounded"
                  id="fullName"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#767676]" htmlFor="email">
                  Your Email ( Required)
                </label>
                <input
                  className="bg-[#F0F0F6] w-[400px] py-2 px-1 rounded"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#767676]" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-[#F0F0F6] w-[400px] py-2 px-1 rounded"
                  id="subject"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#767676]" htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  className="bg-[#F0F0F6] w-[400px] py-2 px-1 rounded"
                />
              </div>
              <button className="w-40 cursor-pointer py-2 font-semibold rounded hover:text-white bg-[#FFB400] flex items-center justify-center">
                send message
              </button>
            </form>
          </div>
          {/* Contactinfo  */}
          <div>
            <h3 className="text-3xl text-center font-bold">
              Contact information
            </h3>
            <div className="flex gap-4 flex-col items-center justify-center">
              <div className="w-[300px] bg-white p-6 flex flex-col gap-4 items-center justify-center mt-[45px] mb-5">
                <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
                  <FaHome className="text-[20px] " />
                </div>
                <div className="flex gap-10">
                  <p className="text-[#767676]">Country:</p>
                  <p className="text-[#767676]">Bangladesh</p>
                </div>
                <div className="flex gap-10 j">
                  <p className="text-[#767676]">City:</p>
                  <p className="text-[#767676]">Dhaka</p>
                </div>
                <div className="flex gap-10">
                  <p className="text-[#767676]">Para:</p>
                  <p className="text-[#767676]">Vatara</p>
                </div>
              </div>
              <div className="w-[300px] bg-white p-6 flex flex-col gap-4 items-center justify-center ">
                <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-[#FFB400]">
                  <IoMdMail className="text-[20px] " />
                </div>
                <div className="flex gap-10">
                  <p className="text-[#767676]">Email:</p>
                  <p className="text-[#767676]">robileo49@gmail.com</p>
                </div>
                <div className="flex gap-10 j">
                  <p className="text-[#767676]">whatsapp:</p>
                  <p className="text-[#767676]">01851228651</p>
                </div>
                <div className="flex gap-10">
                  <p className="text-[#767676]">Telegram::</p>
                  <p className="text-[#767676]">01851228651</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
