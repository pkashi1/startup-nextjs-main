"use client";

import React from "react";
import { MapPin, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fiber Optic Installation",
    location: "Baton Rouge, LA",
    type: "Directional Boring",
    description:
      "Installed 15 miles of fiber optic cables ahead of schedule, ensuring minimal disruption.",
    image: "/images/constrcution/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg",
  },
  {
    id: 2,
    title: "Waterline Replacement",
    location: "New Orleans, LA",
    type: "Utility Installation",
    description:
      "Replaced aging infrastructure with 20 miles of new waterlines, improving city-wide water supply.",
    image: "/images/constrcution/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
  },
  {
    id: 3,
    title: "Electrical Conduit Installation",
    location: "Lafayette, LA",
    type: "Civil Construction",
    description:
      "Underground electrical conduit installation supporting urban expansion projects.",
    image: "/images/constrcution/umit-yildirim-9OB46apMbC4-unsplash.jpg",
  },
];

const typeColors: Record<string, string> = {
  "Directional Boring": "bg-green-200 text-green-800",
  "Utility Installation": "bg-blue-200 text-blue-800",
  "Civil Construction": "bg-yellow-200 text-yellow-800",
};

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Our Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore how we’re building the foundations of tomorrow
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-56 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  {project.location}
                </p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    typeColors[project.type]
                  }`}
                >
                  <Tag size={14} className="mr-1" />
                  {project.type}
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
