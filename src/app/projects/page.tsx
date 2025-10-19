import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-medium text-primary-foreground">
        <span className="text-main-purple">*</span>projects
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
