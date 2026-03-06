import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Activities from "../components/Activities";
import Growth from "../components/Growth";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Activities />
      <Growth />
      <Facilities />
      <Footer />
    </>
  );
}

export default Home;