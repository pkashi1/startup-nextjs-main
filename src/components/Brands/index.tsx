import Image from "next/image";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <div className="relative w-full max-w-[800px]">
                <Image
                  src="/images/trusted_partners.jpeg"
                  alt="Trusted Partners"
                  width={800}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
