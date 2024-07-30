import Image from "next/image";

interface Props {
  imagePath: string;
  title: string;
  description: string;
}
export default function FeatureCard({ imagePath, title, description }: Props) {
  return (
    <div className="flex bg-white px-3 py-3 rounded-lg gap-5 card-border">
      <div className="flex items-center">
        <Image src={imagePath} width={150} height={150} alt="Feature Image" />
      </div>
      <div>
        <h1 className="barlow-semibold text-gray-500 text-base">{title}</h1>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
