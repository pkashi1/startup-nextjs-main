import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/constrcution/pexels-ywanphoto-188679.jpg"
            alt="Southern Underground Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center text-white">
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Building the Foundations of Tomorrow
                </h1>
                <p className="mb-12 text-base leading-relaxed sm:text-lg md:text-xl opacity-90">
                  Southern Underground delivers civil construction, utility installation, and directional boring services across the United States — safely, on time, and within budget.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/projects"
                    className="rounded-xs bg-blue-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-blue-700"
                  >
                    Explore Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block rounded-xs border border-white px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-white hover:text-black"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
