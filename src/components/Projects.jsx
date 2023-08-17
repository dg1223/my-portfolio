import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div id="projects" className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full justify-center">
          <div className="md:flex items-center w-4/5 md:w-1/2 bg-white p-4 shadow-lg rounded-lg">
            <div className="md:ml-24">
              <h2 className="font-bold text-gray-700">{projects[0].title}</h2>
              <p className="text-gray-700">{projects[0].company}</p>
              <p className="text-gray-700">{projects[0].duration}</p>
              <p className="mt-4 text-gray-700">{projects[0].summary}</p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src="https://i.ibb.co/XxcM6hK/lead-scoring.png"
                alt=""
                className="md:w-1/2 rounded-full"
              />
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full justify-center">
          <div className="md:flex items-center w-4/5 md:w-1/2 bg-white p-4 shadow-lg rounded-lg">
            <div className="md:ml-24">
              <h2 className="font-bold text-gray-700">{projects[1].title}</h2>
              <p className="text-gray-700">{projects[1].company}</p>
              <p className="text-gray-700">{projects[1].duration}</p>
              <p className="mt-4 text-gray-700">{projects[1].summary}</p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src="https://i.ibb.co/TkmZSLK/elt-pipeline-infographic.webp"
                alt=""
                className="w-1/2 rounded-full"
              />
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full justify-center">
          <div className="md:flex items-center w-4/5 md:w-1/2 bg-white p-4 shadow-lg rounded-lg">
            <div className="md:ml-24">
              <h2 className="font-bold text-gray-700">{projects[2].title}</h2>
              <p className="text-gray-700">{projects[2].company}</p>
              <p className="text-gray-700">{projects[2].duration}</p>
              <p className="mt-4 text-gray-700">{projects[2].summary}</p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src="https://i.ibb.co/Zgs9hr2/The-risk-differentiation-framework.png"
                alt=""
                className="w-1/2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Projects;
