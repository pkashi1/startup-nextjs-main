import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Southern Underground",
  description: "Reach out to our team for project inquiries, bids, or partnership opportunities.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Reach out to our team for project inquiries, bids, or partnership opportunities."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
