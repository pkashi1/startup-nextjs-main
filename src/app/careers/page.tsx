// src/app/careers/page.tsx

import { Metadata } from "next";
import CareersPage from "@/components/careers/page";  // direct import of your client component

export const metadata: Metadata = {
  title: "Careers | Southern Underground",
  description: "Explore current openings and join our team at Southern Underground.",
};

export default function CareersRoute() {
  return <CareersPage />;
}
