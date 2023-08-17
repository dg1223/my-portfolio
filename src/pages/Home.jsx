import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Experiences />
      <Projects />
      {/* <Education /> */}
      {/* <Courses /> */}
      <Footer />
    </div>
  );
};

export default Home;
