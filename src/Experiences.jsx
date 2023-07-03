import React from "react";

const experiences = [
  {
    position: "Data Scientist",
    company: "ABC Company",
    location: "City, Country",
    duration: "Jan 2020 - Dec 2021",
    summary: "Some random but relevant text about your experience.",
  },
  // Add other experiences as objects in the array
];

const Experiences = () => {
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="font-bold">{exp.position}</h2>
          <p>
            {exp.company}, {exp.location}
          </p>
          <p>{exp.duration}</p>
          <p>{exp.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
