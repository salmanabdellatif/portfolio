import Link from "next/link";
import { MoveRight } from "lucide-react";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-6" id="projects">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium text-primary-foreground">
          <span className="text-main-purple">*</span>projects
        </h2>
        <Link href="/projects" className="flex items-center gap-2 text-primary-foreground hover:text-secondary-foreground">
          <span className="font-medium">View all</span>
          <MoveRight />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4">
        {/* show first three projects only */}
        {projects.slice(0, 5).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
