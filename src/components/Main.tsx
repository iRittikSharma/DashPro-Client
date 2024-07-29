import FeatureCard from "./FeatureCard";
export default function Main() {
  return (
    <div className="bg-main border border-bg-red-700 h-full flex justify-center">
      <div className="w-[96%] h-full ">
        <div className="mt-10 barlow-semibold text-5xl">
          <h1>Good morning, Joe!</h1>
        </div>
        <div className="flex gap-5 justify-between mt-5">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
