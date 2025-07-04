import Breadcrumb from "@/components/Common/Breadcrumb";
import SafetySection from "@/components/Safety/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety | Southern Underground",
  description: "Discover Southern Underground’s commitment to safety and worker well-being on every project.",
};

const SafetyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Safety"
        description="Southern Underground is committed to maintaining the highest safety standards for our workers and communities."
      />
      <SafetySection />
    </>
  );
};

export default SafetyPage;
