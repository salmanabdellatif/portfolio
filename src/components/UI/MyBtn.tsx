import Link from "next/link";

type MyBtnProps = {
  title: string;
  link: string;
};

export default function MyBtn({ title, link }: MyBtnProps) {
  return (
    <Link
      href={link}
      className="inline-block py-2 px-4 border border-main-purple hover:bg-secondary-background transition-colors duration-300">
      {title}
    </Link>
  );
}
