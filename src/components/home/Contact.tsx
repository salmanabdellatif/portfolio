import { appConfig } from "@/data/appConfig";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="py-6" id="contact">
      <h2 className="text-3xl font-medium text-primary-foreground mb-6">
        <span className="text-main-purple">*</span>contact
      </h2>
      <p className="mb-8 text-lg text-secondary-foreground">
        I&apos;m currently open to new opportunities and welcome any questions. My inbox is always open, and I&apos;ll get back to
        you soon.
      </p>
      <p>
        Reach me at{" "}
        <Link href={`mailto:${appConfig.email}`} className="underline font-semibold hover:text-secondary-foreground">
          {appConfig.email}
        </Link>
      </p>
      <p>
        Explore my{" "}
        <Link href="/CV.pdf" target="_blank" className="underline font-semibold hover:text-secondary-foreground">
          CV
        </Link>
      </p>
      <div className="flex gap-4 mt-6">
        <Link href={appConfig.linkedInURL} target="_blank" className="underline font-semibold hover:text-secondary-foreground">
          <Linkedin width={24} height={24} />
        </Link>
        <Link href={appConfig.githubURL} target="_blank" className="underline font-semibold hover:text-secondary-foreground">
          <Github width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
