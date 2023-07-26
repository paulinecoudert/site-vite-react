import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div
      id="contact"
      className="max-w-screen-2xl m-auto sm:pr-8 md:pl-20 p-0 pb-16 text-stone-500"
    >
      <h1 className=" border-t-2 border-dotted border-gray-400  left-13  animate-pulse mx-8 text-8xl font-bold text-left  text-indigo-500">
        Get
      </h1>
      <h1 className="z-10 mb-5  sm:mx-24 mx-8 animate-pulse text-8xl font-bold text-left text-indigo-500 ">
        in touch!
      </h1>
      <form
        action="https://getform.io/f/36ef4b95-1f2f-486f-9500-4a3c2be94b52"
        method="POST"
        encType="multipart/form-data"
        className="max-w-[740px] m-auto  p-4   "
      >
        <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="max-w-[340px] grid sm:grid-cols-1 gap-12 bg-indigo-500 text-gray-100 mt-4 w-8/12 m-auto p-4 content-center rounded-lg  cursor-pointer  bg-gray-100  hover:bg-indigo-400  active:bg-indigo-400  hover:scale-105 ease-in duration-300 ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
