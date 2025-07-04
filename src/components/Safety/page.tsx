import React from "react";
import Image from "next/image";
import { ShieldCheck, HardHat, AlertTriangle, CheckCircle } from "lucide-react";

const SafetySection: React.FC = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Our Commitment to Safety
          </h2>
          <p className="mt-4 text-base font-medium text-body-color sm:text-lg">
            Southern Underground is dedicated to creating a safe and healthy work environment for our employees, partners, and the communities we serve.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Image 1 */}
          <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
            <Image
              src="/images/constrcution/dean-bennett-aBV8pVODWiM-unsplash.jpg"
              alt="Southern Underground safety team"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-64 rounded-md overflow-hidden shadow-lg">
            <Image
              src="/images/constrcution/umit-yildirim-9OB46apMbC4-unsplash.jpg"
              alt="Southern Underground worksite"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-primary h-10 w-10" />
            <div>
              <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                Industry-Leading Standards
              </h4>
              <p className="text-body-color">
                We follow OSHA regulations and the highest industry benchmarks to ensure maximum safety on all projects.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HardHat className="text-primary h-10 w-10" />
            <div>
              <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                Regular Training
              </h4>
              <p className="text-body-color">
                Our crew undergoes continuous safety training and certifications to stay prepared for every situation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-primary h-10 w-10" />
            <div>
              <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                Proactive Risk Assessment
              </h4>
              <p className="text-body-color">
                We identify hazards and mitigate risks before they occur, ensuring peace of mind for our clients and teams.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-primary h-10 w-10" />
            <div>
              <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                99.9% Safety Record
              </h4>
              <p className="text-body-color">
                We are proud of our exceptional safety record across hundreds of projects nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
