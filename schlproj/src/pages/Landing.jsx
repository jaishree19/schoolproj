import Heroslider from "../components/Heroslider";
import "./Landing.css";

function Landing() {
  return (
    <>
      <Heroslider />

      {/* Welcome Section */}
      <section className="hero-bottom">
        <h2>Welcome to Open Minds School</h2>
        <p>
          We focus on building creativity, curiosity and confidence
          in every child through modern learning methods.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">

        <div className="feature-box">
          <h3>📚 Quality Education</h3>
          <p>
            Our curriculum encourages critical thinking and strong
            academic foundations.
          </p>
        </div>

        <div className="feature-box">
          <h3>🏫 Modern Facilities</h3>
          <p>
            Smart classrooms, activity labs and creative learning
            spaces for students.
          </p>
        </div>

        <div className="feature-box">
          <h3>🌱 Holistic Development</h3>
          <p>
            Sports, arts and activities that nurture the overall
            growth of every child.
          </p>
        </div>

      </section>

      {/* School Highlights */}
      <section className="school-stats">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Expert Teachers</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Years of Excellence</p>
        </div>

        <div className="stat-box">
          <h2>20+</h2>
          <p>Activities</p>
        </div>

      </section>

    </>
  );
}

export default Landing;