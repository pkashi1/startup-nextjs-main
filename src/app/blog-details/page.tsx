import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovations in Directional Boring | Southern Underground",
  description: "Discover how directional boring technology is shaping the future of underground utility installations.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Innovations in Directional Boring: Shaping the Future of Underground Utilities
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-01.png"
                            alt="John Smith"
                            fill
                          />
                        </div>
                      </div>
                      <div>
                        <span className="text-body-color text-base font-medium">
                          By <span>John Smith</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color text-base font-medium">
                        01 June 2025
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <TagButton text="Directional Boring" />
                    <TagButton text="Technology" />
                  </div>
                </div>

                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    Southern Underground leverages cutting-edge directional boring technology to deliver precise, efficient installations while minimizing surface disruption for communities nationwide.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/constrcution/di-F1MlxlEpaOk-unsplash.jpg"
                        alt="Directional boring machinery in action"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    Our advanced methods ensure minimal disruption to the surface environment while significantly improving the speed and accuracy of underground installations. From utility lines to telecommunications, directional boring has become a cornerstone of modern infrastructure development.
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Key Advantages of Directional Boring
                  </h3>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Reduces surface disruption and restoration costs.
                    </li>
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Enables precise underground utility placement.
                    </li>
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Ideal for environmentally sensitive areas.
                    </li>
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Faster project completion times compared to traditional trenching.
                    </li>
                  </ul>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                    With a strong focus on innovation, safety, and efficiency, Southern Underground remains a leader in the underground construction industry. Contact us to learn how our directional boring solutions can benefit your next project.
                  </p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Share this post :
                      </h4>
                      <div className="flex items-center sm:justify-start">
                        <SharePost />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Tags :
                      </h4>
                      <div className="flex items-center sm:justify-end">
                        <TagButton text="Directional Boring" />
                        <TagButton text="Technology" />
                        <TagButton text="Construction" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
