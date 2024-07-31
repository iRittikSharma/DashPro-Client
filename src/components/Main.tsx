import FeatureCard from "./FeatureCard";
import Board from "./Board";
import OptionsBar from "./OptionsBar";
const featureData = [
  {
    id: 1,
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
    imagePath: "/1st-card.png",
  },
  {
    id: 2,
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
    imagePath: "/2nd-card.png",
  },
  {
    id: 3,
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
    imagePath: "/3rd-card.png",
  },
];
export default function Main() {
  return (
    <div className="bg-main border border-bg-red-700 h-full flex justify-center">
      <div className="w-[98%] h-full ">
        <div className="mt-5 barlow-semibold text-2xl xl:text-4xl">
          <h1>Good morning, Joe!</h1>
        </div>
        <div className="flex gap-2 justify-between mt-3 xl:mt-5">
          {featureData?.map((data) => (
            <FeatureCard
              key={data.id}
              title={data.title}
              description={data.description}
              imagePath={data.imagePath}
            />
          ))}
        </div>

        {/* Board */}

        <div className="mt-4 ">
          <OptionsBar />
        </div>

        <div className="mt-5 bg-white rounded-md px-4">
          <Board />
        </div>
      </div>
    </div>
  );
}
