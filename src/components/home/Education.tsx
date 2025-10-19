import Link from "next/link";
import { appConfig } from "@/data/appConfig";

export default function Education() {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-medium text-primary-foreground mb-6">
        <span className="text-main-purple">*</span>education
      </h2>
      <div className="">
        <p className="text-primary-foreground hover:text-secondary-foreground font-semibold text-xl">
          <Link href={appConfig.uniURL} rel="noopener noreferrer" target="_blank">
            Süleyman Demirel University
          </Link>
        </p>
        <p className="text-secondary-foreground">
          Bachelor of Computer Engineering <span> • </span>Graduated: 2025
        </p>
        <div className="mt-4 text-primary-foreground space-y-2">
          <p className="font-medium">Relevant courses included:</p>
          <ul className="list-disc list-inside text-secondary-foreground">
            <li>Data Structures & Algorithms </li>
            <li>Software Engineering</li>
            <li>Web Development</li>
            <li>Database Systems</li>
            <li>Microprocessors & Microcontrollers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
