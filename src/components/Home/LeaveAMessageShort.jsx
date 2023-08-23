import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const LeaveAMessage = ({ header }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_4mctjog",
          "template_7fi5bco",
          form.current,
          "pKr5g4rAla9WuxUbp"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitted(true);
      resetRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };

  const form = useRef();

  return (
    <div className="bg-[#750b0b] font-primary p-4">
      {submitted && (
        <h1 className=" text-center font-primary text-xl">
          Submitted Successfully !!
        </h1>
      )}

      <div className=" lg:mx-16 ">
        <h1 className="uppercase text-center text-white text-4xl font-semibold">
          Intrested in joining our team
        </h1>
        <div className="mx-auto p-4 w-full lg:w-[70%]">
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="horizontal-line  ml-auto"
          >
            <h1 className="uppercase tracking-wide text-3xl text-white font-primary pb-4 font-bold">
              {header}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="text"
                placeholder="NAME"
                required
                ref={nameRef}
                name="from_name"
              />
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="email"
                placeholder="EMAIL"
                required
                name="from_email"
                ref={emailRef}
              />
              <input
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                type="tel"
                placeholder="PHONE"
                required
                ref={phoneRef}
                name="from_phone"
              />
              <select
                className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4  caret-black
                  bg-white placeholder:text-black"
                required
                name="subject"
                placeholder="TOPIC"
                ref={subjectRef}
              >
                <option value="Topic" selected disabled hidden>
                  TOPIC
                </option>
                <option value="General Inquiry">Tee Time</option>
                <option value="Technical Support">Rates</option>
                <option value="Feedback">Memberships</option>
                <option value="Other">Events</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                className="bg-transparent outline outline-1 outline-white mb-4 w-full  rounded-sm p-4  caret-black col-span-2
                  bg-white placeholder:text-black"
                name="message"
                id="description"
                required
                cols="30"
                rows="6"
                ref={descriptionRef}
                placeholder="LEAVE US A MESSAGE?"
              ></textarea>
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="uppercase px-4 py-2 ml-auto  text-white text-sm font-medium"
                style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
              >
                Submit
              </button>
            </div>

            <button type="reset" className="hidden" ref={resetRef}>
              Rest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveAMessage;
