import { stepFollow } from "../assets/asset";

const Steps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <h1 className="col-span-2 text-2xl font-bold md:col-span-3 mb-4 text-center">
        Create your resume, the quick and easy way
      </h1>
      {stepFollow.map((step, i) => (
        <div
          className="flex flex-col items-center gap-3 shadow-2xl p-3"
          key={i}
        >
          <img src={step.image} alt={step.title} className="w-30 h-30" />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold flex gap-3 items-center">
              <span className="border rounded-full flex items-center justify-center w-[2rem] h-[2rem] p-3">
                {i + 1}
              </span>
              {step.title}
            </h2>
            <p className="text-lg">{step.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
