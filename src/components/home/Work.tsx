import Link from "next/link";

export default function Work() {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-medium text-primary-foreground mb-6">
        <span className="text-main-purple">*</span>work
      </h2>
      <div className="">
        <Link
          href="https://iberbancoltd.com/"
          className="text-primary-foreground hover:text-secondary-foreground font-semibold text-xl"
          rel="noopener noreferrer"
          target="_blank">
          Iberbanco Ltd.
        </Link>
        <p className="text-secondary-foreground">
          Frontend Engineer<span> • </span>Jul 2024 - Sep 2025
        </p>
        <ul className="list-disc list-inside mt-4 text-primary-foreground space-y-4">
          <li>
            Developed frontend features for 5+ production websites, including{" "}
            <a href="https://iberbancoltd.com" rel="noopener noreferrer" target="_blank" className="font-semibold underline">
              iberbancoltd.com
            </a>{" "}
            and{" "}
            <a href="https://wallstreetibu.com" rel="noopener noreferrer" target="_blank" className="font-semibold underline">
              wallstreetibu.com
            </a>{" "}
            , using React.js and Next.js.
          </li>
          <li>Transformed Figma designs into pixel-perfect, responsive web applications with TailwindCSS.</li>
          <li>
            Collaborated remotely with cross-functional teams to ensure optimal performance and cross-browser compatibility.
          </li>
        </ul>
      </div>
    </div>
  );
}
