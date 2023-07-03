import React from "react";
import axios from "axios";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      designation: formData.get("designation"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      await axios.post("/api/contact", data);
      // Show success message or perform desired action
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            id="designation"
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
