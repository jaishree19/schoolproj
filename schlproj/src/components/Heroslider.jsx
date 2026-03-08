import { useState, useEffect } from "react";
import "./Heroslider.css";

import img1 from "../assets/slide1.jpg";
import img2 from "../assets/slide2.jpg";
import img3 from "../assets/slide3.jpg";
import img4 from "../assets/slide4.jpg";

function Heroslider() {

  const slides = [
    {
      image: img1,
      title: "Welcome to Open Minds School",
      text: "Providing quality education and nurturing young minds."
    },
    {
      image: img2,
      title: "Creative Learning Environment",
      text: "Encouraging curiosity and innovation in every student."
    },
    {
      image: img3,
      title: "Holistic Development",
      text: "Sports, arts, and academics together build strong futures."
    },
    {
      image: img4,
      title: "Admissions Open 2026-27",
      text: "Enroll your child today and begin the journey of excellence."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">

      <img src={slides[current].image} alt="slide" />

      <div className="hero-text">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>
        <button>Learn More</button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default Heroslider;