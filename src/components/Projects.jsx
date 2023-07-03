import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div className="">
      <div className="carousel w-full mt-16">
        <div id="item1" className="carousel-item w-full justify-center">
          <div className="flex items-center w-1/2 bg-white p-4 shadow-md rounded-lg bg-gray-50">
            <div className="ml-24">
              <h2 className="font-bold">{projects[0].title}</h2>
              <p>{projects[0].company}</p>
              <p>{projects[0].duration}</p>
              <p className="mt-4">{projects[0].summary}</p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src="https://i.ibb.co/XxcM6hK/lead-scoring.png"
                alt=""
                className="w-1/2 rounded-full"
              />
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full justify-center">
          <div className="flex items-center w-1/2 bg-white p-4 shadow-md rounded-lg bg-gray-50">
            <div className="ml-24">
              <h2 className="font-bold">{projects[1].title}</h2>
              <p>{projects[1].company}</p>
              <p>{projects[1].duration}</p>
              <p className="mt-4">{projects[1].summary}</p>
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
          <div className="flex items-center w-1/2 bg-white p-4 shadow-md rounded-lg bg-gray-50">
            <div className="ml-24">
              <h2 className="font-bold">{projects[2].title}</h2>
              <p>{projects[2].company}</p>
              <p>{projects[2].duration}</p>
              <p className="mt-4">{projects[2].summary}</p>
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
