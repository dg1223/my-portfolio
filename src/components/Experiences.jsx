import experiences from "../data/experiences.json";

const Experiences = () => {
  return (
    <div className="mt-10 mx-10 md:mx-0">
      <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
      <div
        id="experiences"
        className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5"
      >
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="font-bold text-gray-800">{exp.position}</h2>
            <p className="text-gray-700">
              {exp.company} ({exp.location})
            </p>
            <p className="text-gray-700">{exp.duration}</p>
            <p className="mt-4 text-gray-700">{exp.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
