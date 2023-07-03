import experiences from "../data/experiences.json";

const Experiences = () => {
  return (
    <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-16">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="font-bold">{exp.position}</h2>
          <p>
            {exp.company} ({exp.location})
          </p>
          <p>{exp.duration}</p>
          <p className="mt-4">{exp.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
