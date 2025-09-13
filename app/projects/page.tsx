import { Metadata } from "next";
import { getAllProjectSummaries, getProjectCategories } from "@/data/projects";
import ProjectsClient from "./projects.client";

export const metadata: Metadata = {
  title: "All Projects",
  description: "A comprehensive collection of my development work, showcasing various technologies and problem-solving approaches across different domains.",
};

export default function ProjectsPage() {
  // Load project data on the server - this keeps the large data registry server-side
  const allProjects = getAllProjectSummaries();
  const categories = getProjectCategories();

  return <ProjectsClient allProjects={allProjects} categories={categories} />;
}
