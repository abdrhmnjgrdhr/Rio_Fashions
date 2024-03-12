import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tqaxqah",
        "template_qup624g",
        form.current,
        "yC0Yi7dhaA35pK0rc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('sent succesfull');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className="container w-[90%] mx-auto mb-10">
        <div className="banner-for-content bg-left-top h-[10vh] md:h-[20vh] mt-6 flex justify-center items-center rounded-2xl">
          <h2 className="text-[2rem] md:text-4xl text-amber-100 font-[cookie,cursive] font-bold">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center">
          <div className="relative flex flex-col justify-center lg:after:content-[''] lg:after:h-[70%] lg:after:w-[0.5%] lg:after:bg-gray-400 lg:after:absolute lg:after:-right-5 gap-4 mt-10">
            <div className="flex items-center gap-4">
              <MdOutlineLocationOn />
              <p>
                Ambattur, Chennai,
                <br /> Tamil Nadu, 600 005.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <IoMailOpenOutline />
              <p>
                <a
                  className="text-blue-400"
                  href="mailto:riofashions3@gmail.com"
                >
                  riofashions3@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <LuPhoneCall />
              <p>
                <a className="text-blue-400" href="tel:8524994484">
                  +91 8524994484
                </a>
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62171.037651994084!2d80.10732004164699!3d13.118823761944238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ba9a487b3f%3A0x1e923f00f5206296!2sAmbattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704605295608!5m2!1sen!2sin"
            className="h-[500px] lg:h-[400px] lg:w-[70%] bg-red-400 lg:mt-10"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form ref={form} onSubmit={sendEmail} className="text-center mt-10">
          <h3 className="text-4xl font-semiboldbold font-[cookie]">
            Feel free to connect with us
          </h3>
          <div className="mt-10">
            <label className="relative">
              <input
                type="text"
                name="user_name"
                required
                className="h-12 w-[80%] lg:w-[40%] text-[1rem] bg-[#ece9e9] px-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-red-300 transition duration-200"
              />
              <span className="text-[0.9rem] text-opacity-80 absolute left-0 top-[0%] mx-6 px-2 transition duration-200 input-text">
                Enter Full Name
              </span>
            </label>
            <div className="text-[#ece9e9]">h</div>
            <label className="relative">
              <input
                type="text"
                name="user_email"
                required
                className="h-12 w-[80%] lg:w-[40%] text-[1rem] bg-[#ece9e9] px-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-red-300 transition duration-200"
              />
              <span className="text-[0.9rem] text-opacity-80 absolute left-0 top-[0%] mx-6 px-2 transition duration-200 input-text">
                Enter your E-mail
              </span>
            </label>
            <div className="text-[#ece9e9]">h</div>
            <label className="relative">
              <textarea
                name="message"
                required
                className="h-20 w-[80%] lg:w-[40%] text-[1rem] bg-[#ece9e9]  p-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-red-300 transition duration-200"
              ></textarea>
              <span className="text-[0.9rem] text-opacity-80 absolute left-0 m-6 px-2 transition duration-200 input-text">
                Enter your E-mail
              </span>
            </label>
          </div>
          <input className="border-2 border-red-400 mt-5 px-4 rounded-md" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
