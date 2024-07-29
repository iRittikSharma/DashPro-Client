import Image from "next/image";
export default function FeatureCard() {
  return (
    <div className="flex bg-white px-3 py-5 rounded-lg gap-5 card-border">
      <div className="flex items-center">
        <Image
          src="/1st-card.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h1 className="barlow-semibold text-gray-500 text-xl">
          Introducing tags
        </h1>
        <p className="mt-2 text-gray-500">
          Easily categorize and find your notes by adding tags. Keep your
          workspace clutter-free and efficient.
        </p>
      </div>
    </div>
  );
}
