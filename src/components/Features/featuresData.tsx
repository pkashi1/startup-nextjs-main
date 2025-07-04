import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="18" opacity="0.5" />
        <path d="M10 20 L20 30 L30 10" />
      </svg>
    ),
    title: "Directional Boring",
    paragraph:
      "Utilizing advanced technology for precise and efficient underground installations with minimal surface disruption.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="5" y="5" width="30" height="30" opacity="0.5" />
        <path d="M10 10 H30 V30 H10 Z" />
      </svg>
    ),
    title: "Utility Installation",
    paragraph:
      "Comprehensive solutions for water, sewer, and electrical systems, ensuring seamless integration and longevity.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="10" opacity="0.5" />
        <path d="M15 25 L25 25 L20 15 Z" />
      </svg>
    ),
    title: "Civil Construction",
    paragraph:
      "From roadways to public facilities, we handle projects that enhance community infrastructure.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="10" y="10" width="20" height="20" opacity="0.5" />
        <path d="M10 10 L30 30 M30 10 L10 30" />
      </svg>
    ),
    title: "Pile Installation",
    paragraph:
      "Expertise in installing deep foundations that provide stability and support for various structures.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0 L30 20 L10 20 Z" opacity="0.5" />
        <path d="M20 20 L30 40 L10 40 Z" />
      </svg>
    ),
    title: "Water & Sewer Treatment",
    paragraph:
      "Designing and constructing facilities that ensure clean water access and effective waste management.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="18" opacity="0.5" />
        <path d="M10 10 L30 30 M30 10 L10 30" />
      </svg>
    ),
    title: "Commitment to Safety",
    paragraph:
      "We adhere to stringent safety protocols and continuously train our staff to uphold the highest standards.",
  },
];

export default featuresData;
