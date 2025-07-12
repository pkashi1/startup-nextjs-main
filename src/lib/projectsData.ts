// src/lib/projectsData.ts

export type Project = {
  id: number
  title: string
  image: string
  summary: string
  details: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Downtown Tunnel Restoration",
    image: "/images/constrcution/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg",
    summary: "A comprehensive rehab of the century-old pedestrian tunnel downtown.",
    details:
      "Over a six-month period, our team replaced lighting, reinforced arch supports, improved drainage, and installed new wayfinding signage. We maintained open‐air traffic flow throughout construction, adhering to strict safety protocols and coordinating closely with city planners.",
  },
  {
    id: 2,
    title: "Riverside Utility Upgrade",
    image: "/images/constrcution/pexels-ywanphoto-188679.jpg",
    summary: "Upgrading water, sewer, and power lines along the riverbank corridor.",
    details:
      "This $4 million project required horizontal directional drilling under sensitive wetlands. We used real-time GPS guidance to avoid environmental impact, then restored the riverside walking path in partnership with the parks department, completing the work on schedule and under budget.",
  },
  {
    id: 3,
    title: "Suburban Roadway Boring",
    image: "/images/constrcution/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
    summary: "Installing telecom conduits beneath a major suburban arterial.",
    details:
      "To minimize lane closures, we employed trenchless boring techniques to install fiber conduits beneath a high-traffic road. Traffic control plans kept vehicles moving during peak hours, and our precision drilling eliminated the need for full-depth trenching.",
  },
  {
    id: 4,
    title: "Historic District Water Main Replacement",
    image: "/images/constrcution/di-F1MlxlEpaOk-unsplash.jpg",
    summary: "Replacing aging cast-iron mains in a historic downtown district.",
    details:
      "Working in narrow streets, we used micro-tunneling to replace corroded water mains without disturbing century-old brick sidewalks. Meticulous surveying ensured alignment accuracy, and daily coordination with local businesses kept disruptions to a minimum.",
  },
  {
    id: 5,
    title: "Airport Runway Deicing Drainage",
    image: "/images/constrcution/dean-bennett-aBV8pVODWiM-unsplash.jpg",
    summary: "Installing a subsurface drainage network under an active runway.",
    details:
      "Safety was paramount: we drilled and jacked 300 feet of perforated pipe under the runway’s pavement slab to manage deicing runoff. Night-time work windows and FAA coordination allowed us to complete the installation with zero flight delays.",
  },
]
