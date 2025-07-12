// src/app/projects/[id]/page.tsx

import ProjectDetails from "@/components/Projects/projectdetails";
import { projects } from "@/lib/projectsData";

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
  // in some TS setups this might be just `{ params: { id: string } }`
}

export default async function ProjectPage({ params }: PageProps) {
  // await the incoming params promise:
  const { id } = await params;
  const projectId = parseInt(id, 10);

  return <ProjectDetails id={projectId} />;
}
