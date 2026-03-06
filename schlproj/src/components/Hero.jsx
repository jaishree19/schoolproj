import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>The Right Way to Start Your Child's Growth Journey</h1>

        <p>
          Open the door to a brighter future at Open Minds School.
        </p>

        <button className="btn1">Enroll Now</button>
        <button className="btn2">Explore Programs</button>
      </div>

      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="kids"
        />
      </div>

    </section>
  );
}

export default Hero;