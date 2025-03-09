import { featuresContent } from "../assets/asset";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <h1 className="col-span-2 text-2xl font-bold md:col-span-2 mb-4 text-center">
        Why use ResumeHelp’s tools and features
      </h1>
      {featuresContent.map((feature, i) => (
        <div className="flex items-center gap-4 rounded-2xl shadow-md p-3" key={i}>
          <img src={feature.image} alt={feature.title} className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-lg">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
