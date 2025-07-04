import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    slug: "innovations-in-directional-boring",
    title: "Innovations in Directional Boring: The Future of Underground Utilities",
    paragraph: "Discover how directional boring helps with faster, cleaner, and more efficient underground utility installations.",
    content: `Southern Underground leverages advanced directional boring technology to ensure minimal disruption while delivering efficient underground utility installations.

Our methods reduce surface restoration costs and improve project timelines. We focus on precision, environmental responsibility, and innovation, allowing us to install utilities beneath sensitive areas, roadways, and existing structures without extensive excavation.
- Precision underground placements
- Reduced environmental impact
- Cost savings on restoration
- Faster completion timelines

Contact us today to learn how directional boring can benefit your next project.`,
    image: "/images/constrcution/di-F1MlxlEpaOk-unsplash.jpg",
    author: {
      name: "John Smith",
      image: "/images/blog/author-01.png",
      designation: "Senior Project Engineer",
    },
    tags: ["Directional Boring", "Technology"],
    publishDate: "2025-06-01",
  },
  {
    id: 2,
    slug: "modern-infrastructure-upgrades",
    title: "Modern Infrastructure Upgrades for Growing Cities",
    paragraph: "Learn how modern infrastructure upgrades support the growth and resilience of urban communities.",
    content: `Our infrastructure modernization projects focus on enhancing utility reliability, safety, and capacity.

We use advanced technologies to replace aging systems, ensuring they meet the demands of expanding populations and future development.
- Improve service reliability
- Increase system capacity
- Enhance safety standards
- Support economic growth`,
    image: "/images/constrcution/fleur-dQf7RZhMOJU-unsplash.jpg",
    author: {
      name: "Emily Johnson",
      image: "/images/blog/author-02.png",
      designation: "Municipal Engineer",
    },
    tags: ["Infrastructure", "Community"],
    publishDate: "2025-05-20",
  },
  {
    id: 3,
    slug: "sustainable-utility-solutions",
    title: "Sustainable Utility Solutions for a Greener Future",
    paragraph: "Explore how sustainable utility solutions are transforming urban landscapes and reducing environmental impact.",
    content: `At Southern Underground, we prioritize sustainability in all our projects. Our utility solutions are designed to minimize environmental impact while maximizing efficiency.`,
    image: "/images/constrcution/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg",
    author:{
      name: "Michael Brown",
      image: "/images/blog/author-03.png",
      designation: "Sustainability Consultant",
    },
    tags: ["Sustainability", "Utilities"],
    publishDate: "2025-04-15",
  },
];

export default blogData;
