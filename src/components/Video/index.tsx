"use client";

// import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { getRandomImage } from "@/app/imageselection";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>(getRandomImage());
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFade(false);
      // After fade-out duration, update image and fade-in
      setTimeout(() => {
        setCurrentImage(getRandomImage());
        setFade(true);
      }, 500); // fade-out duration: 500ms
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Committed to Safe and Efficient Construction"
            paragraph="Watch how Southern Underground delivers innovative underground construction solutions while upholding the highest safety standards."
            center
            mb="80px"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image
                    src={currentImage}
                    alt="Southern Underground project"
                    className={`object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
                    fill
                  />
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    {/* <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="text-blue-600 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
        </div>
      </section>

      {/* <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      /> */}
    </>
  );
}
