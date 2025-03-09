import Features from "../components/Features";
import Hero from "../components/Hero";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div className="py-2">
      <Hero />
      <Features />
      <Steps />
    </div>
  );
};

export default Home;
