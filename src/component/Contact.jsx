import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact({ templateId, serviceId, pbKey }) {
  const [message, setMessage] = useState({
    email: "",
    name: "",
    message: "",
  });

  function updateMessage(event) {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setMessage({
          ...message,
          email: value,
        });
        break;
      case "name":
        setMessage({
          ...message,
          name: value,
        });
        break;
      case "message":
        setMessage({
          ...message,
          message: value,
        });
        break;
      default:
        break;
    }
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: pbKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage({
            email: "",
            name: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section className="w-full max-w-[750px] bg-Green bg-opacity-5 px-10 py-8 lg:py-16 ">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-LightSky ">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-8">
        <div>
          <label htmlFor="email" className="mb-2 block ">
            Your email
          </label>
          <input
            onChange={(e) => updateMessage(e)}
            value={message.email}
            type="email"
            name="email"
            className="block w-full rounded-lg bg-black bg-opacity-30 p-3 text-sm shadow-sm "
            placeholder="name@domain.com"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-2 block">
            Name
          </label>
          <input
            onChange={(e) => updateMessage(e)}
            value={message.name}
            type="text"
            name="name"
            className="block w-full rounded-lg bg-black bg-opacity-30 p-3  text-sm shadow-sm "
            placeholder="What's your name?"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block ">
            Your message
          </label>
          <textarea
            onChange={(e) => updateMessage(e)}
            value={message.message}
            name="message"
            rows="6"
            className="block w-full rounded-lg bg-black bg-opacity-30 p-2.5  text-sm shadow-sm "
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="self-center rounded-md border-2 border-Green px-5 py-2 "
        >
          Send message
        </button>
      </form>
    </section>
  );
}
