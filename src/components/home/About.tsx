import Image from "next/image";
import Link from "next/link";
import MyBtn from "@/components/UI/MyBtn";
import pp from "@/assets/pp.png";
import { appConfig } from "@/data/appConfig";

export default function About() {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-medium text-primary-foreground mb-6">
        <span className="text-main-purple">*</span>about
      </h2>
      <Link href={appConfig.linkedInURL} rel="noopener noreferrer" target="_blank">
        <Image
          src={pp}
          alt="profile-pic"
          width={160}
          height={160}
          className="mx-auto mb-5 md:mb-4 md:ml-4 rounded-full bg-secondary-background grayscale md:float-right"
        />
      </Link>
      <div className="mx-auto flex-1 text-justify">
        <p className="text-primary-foreground text-base">
          I&apos;m a software engineer from Egypt, currently living in Türkiye, where I recently graduated with a Bachelor&apos;s
          in Computer Engineering from{" "}
          <a href={appConfig.uniURL} rel="noopener noreferrer" target="_blank" className="underline font-semibold">
            Süleyman Demirel University.
          </a>
        </p>
        <p className="text-primary-foreground text-base mt-4">
          My university classes gave me a strong start, but I really wanted to build things people could see and interact with.
          So, I taught myself frontend development and focused on modern tools like React, Next.js, and TypeScript.
        </p>
        <p className="text-primary-foreground text-base mt-4">
          This hard work led to my first job as a Frontend Developer at{" "}
          <a href="https://iberbancoltd.com/" rel="noopener noreferrer" target="_blank" className="underline font-semibold">
            Iberbanco.
          </a>{" "}
          I turned Figma designs into responsive websites, helped launch over 5 production sites.
        </p>
        <p className="text-primary-foreground text-base mt-4">
          Now that I have graduated, I am eager to focus 100% on my career and find a role where I can continue to grow my skills
          as a developer. I am currently open to new opportunities and excited to bring my passion and hands-on experience to a
          new team.
        </p>
        <div className="mt-6 hidden md:block">
          <MyBtn title="Contact me" link="#contact" />
        </div>
      </div>
    </div>
  );
}
