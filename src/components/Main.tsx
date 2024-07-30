import FeatureCard from "./FeatureCard";
import Board from "./Board";
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

        {/* Board */}

        <div className="mt-10 bg-white rounded-md">
          <Board />
        </div>
      </div>
    </div>
  );
}
