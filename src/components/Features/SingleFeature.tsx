import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* Icon container */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
