import React from "react";

function Contact() {
  return (
    <div className="p-20 bg-orange-100 ">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-3xl font-semibold">CONTACT</p>
        <p className="h-1 w-14 mt-7 bg-orange-600 rounded-sm"></p>
      </div>
      <div className="  mt-6  ">
        <form className="flex flex-col items-center ">
          <div className="flex gap-9 items-center w-3/4 justify-between">
            <input type="text" placeholder="Name" className="p-3 w-3/4" />
            <input type="number" placeholder="Phone" className="p-3 w-3/4" />
            <input
              type="email"
              placeholder="Email address"
              className="p-3 w-3/4"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 mt-3 w-3/4 "
          ></textarea>
          <button className="p-4 bg-orange-600 text-white mt-7">
            CONTACT US
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
