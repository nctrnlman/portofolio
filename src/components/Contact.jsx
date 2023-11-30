import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";
import emailConfig from "../data/emailConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { addToast } = useToasts();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        formData,
        emailConfig.userID
      );

      addToast("Form submitted successfully", { appearance: "success" });
      setFormData({ name: "", email: "", message: "" }); // Clear the form after successful submission
    } catch (error) {
      console.error(error);
      addToast("An error occurred. Please try again later.", {
        appearance: "error",
      });
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          {/* <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            vutukuri.kumar192st.niituniversity.in
          </p> */}
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
