import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type MyBtnProps = {
  title: string;
  link: string;
  theme?: "primary" | "secondary";
  icon?: "github" | "demo-link";
};

export default function MyBtn({ title, link, theme = "primary", icon }: MyBtnProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="text-primary-foreground" />;
      case "demo-link":
        return <ExternalLink className="text-primary-foreground" />;
      default:
        break;
    }
  };

  return (
    <Link
      href={link}
      className={`inline-block py-2 px-4 border hover:bg-secondary-background ${
        theme === "primary" ? "border-main-purple" : "border-secondary-foreground"
      }`}>
      <p className="flex items-center gap-4 m-0">
        <span>{title}</span>
        {icon && <span>{getIcon(icon)}</span>}
      </p>
    </Link>
  );
}
