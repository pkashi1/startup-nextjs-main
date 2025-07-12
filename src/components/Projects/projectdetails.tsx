"use client";

import React from "react";
import { projects } from "./page";
import { MapPin, Tag } from "lucide-react";
import Image from "next/image";

interface ProjectDetailsProps {
  id: number;
}

const typeColors: Record<string, string> = {
  "Directional Boring": "bg-green-200 text-green-800",
  "Utility Installation": "bg-blue-200 text-blue-800",
  "Civil Construction": "bg-yellow-200 text-yellow-800",
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center py-20">Project not found.</p>;
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
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
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
