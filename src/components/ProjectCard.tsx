import Link from "next/link";
import { Project } from "@/data/project";
import MyBtn from "@/components/UI/MyBtn";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard(project: Project) {
  return (
    <div className="border border-secondary-foreground h-fit">
      <div className="p-2">
        <Link href={project.liveDemoUrl || "#"} target="_blank" rel="noreferrer noopener">
          <h3 className="flex items-center gap-2 text-xl text-primary-foreground hover:text-main-purple">
            <span>{project.title}</span>
            <ArrowUpRight />
          </h3>
        </Link>
        <p className="text-secondary-foreground mt-4">{project.description}</p>
      </div>
      <div className="p-2 text-secondary-foreground text-base border-y border-secondary-foreground">
        <h4 className="text-primary-foreground">technologies</h4>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {project.technologies.map((technology, idx) => (
            <span key={idx} className="text-xs lowercase border border-secondary-foreground rounded-sm px-2 py-1">
              {technology}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <MyBtn title="code" icon="github" link={project.githubUrl} />
        {project.liveDemoUrl && <MyBtn title="live demo" link={project.liveDemoUrl} icon="demo-link" theme="secondary" />}
      </div>
    </div>
  );
}
