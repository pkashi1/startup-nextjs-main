import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directional Boring Innovations | Southern Underground Blog",
  description: "Explore the latest insights on underground utility construction, safety, and modernization by Southern Underground.",
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Innovations in Directional Boring: The Future of Underground Utilities
                </h1>
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
                  <p className="text-body-color mb-10 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    Learn how Southern Underground’s innovative directional boring techniques are revolutionizing underground utility construction while minimizing surface disruption.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/constrcution/di-F1MlxlEpaOk-unsplash.jpg"
                        alt="Directional boring machinery"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="text-body-color mb-10 text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed">
                    Our advanced methods support faster installations, reduced environmental impact, and enhanced accuracy. From utility lines to fiber optics, directional boring is transforming the infrastructure landscape.
                  </p>

                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Precision placement of underground utilities.
                    </li>
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Minimized impact on surface structures and landscapes.
                    </li>
                    <li className="mb-2 text-base font-medium sm:text-lg">
                      Enhanced safety and efficiency.
                    </li>
                  </ul>

                  <div className="bg-primary/10 relative z-10 mb-10 rounded-md p-8">
                    <p className="text-body-color text-center text-base font-medium italic">
                      At Southern Underground, we are committed to driving innovation in underground construction. Contact us today to learn how we can support your next project.
                    </p>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Popular Tags :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <TagButton text="Directional Boring" />
                        <TagButton text="Infrastructure" />
                        <TagButton text="Safety" />
                        <TagButton text="Construction" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mt-12 mb-10 rounded-xs bg-white p-6 lg:mt-0 dark:shadow-none">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="border-stroke dark:text-body-color-dark text-body-color focus:border-primary dark:focus:border-primary mr-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base dark:border-transparent dark:bg-[#2C303B]"
                  />
                  <button
                    aria-label="search button"
                    className="bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-xs text-white"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Related Posts
                </h3>
                <ul className="p-8">
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="Safety Protocols in Utility Installation"
                      image="/images/constrcution/fleur-dQf7RZhMOJU-unsplash.jpg"
                      slug="#"
                      date="20 May 2025"
                    />
                  </li>
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="Modernizing Infrastructure for Growing Cities"
                      image="/images/constrcution/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
                      slug="#"
                      date="15 Apr 2025"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="Sustainable Practices in Underground Construction"
                      image="/images/constrcution/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg"
                      slug="#"
                      date="10 Mar 2025"
                    />
                  </li>
                </ul>
              </div>

              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Popular Categories
                </h3>
                <ul className="px-8 py-6">
                  <li><a href="#0" className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium">Directional Boring</a></li>
                  <li><a href="#0" className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium">Utility Installation</a></li>
                  <li><a href="#0" className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium">Safety Standards</a></li>
                  <li><a href="#0" className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium">Infrastructure</a></li>
                  <li><a href="#0" className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium">Construction Innovation</a></li>
                </ul>
              </div>

              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2 px-8 py-6">
                  <TagButton text="Directional Boring" />
                  <TagButton text="Technology" />
                  <TagButton text="Infrastructure" />
                  <TagButton text="Safety" />
                  <TagButton text="Construction" />
                </div>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
