import Image from "next/image";
import MyBtn from "@/components/UI/MyBtn";
import hero_avatar from "@/assets/hero-avatar.svg";
import hero_purple_logo from "@/assets/hero-purple-logo.svg";
import dots_square from "@/assets/dots-square.svg";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-0 my-5.5 md:my-9.5 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[55%]">
          <h1 className="text-[32px] font-semibold md:mt-18">
            Salman is a <span className="text-main-purple">software engineer</span> and{" "}
            <span className="text-main-purple">web developer</span>
          </h1>
          <p className="mt-8 text-secondary-foreground text-justify">
            He&apos;s passionate about creating intuitive and engaging interfaces with modern web technologies.
          </p>
          <div className="mt-6 hidden md:block">
            <MyBtn title="Contact me!!" link="#" />
          </div>
        </div>
        <div className=" w-full md:w-[45%]">
          <div className="relative">
            <Image src={hero_avatar} alt="profile" />
            <Image src={hero_purple_logo} alt="logo" className="absolute left-0 top-[20%] -z-1" />
            <Image src={dots_square} alt="dots" className="absolute right-6 bottom-12" />
          </div>
          <div className="border border-secondary-foreground p-2 flex items-center gap-2 max-w-10/12 mx-auto">
            <div className="w-4 h-4 bg-main-purple"></div>
            <p className="text-base text-secondary-foreground">
              Currently working on <span className="text-primary-foreground">Portfolio</span>
            </p>
          </div>
        </div>
      </div>
      {/* quote */}
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:max-w-[720px] border border-main-gray relative mx-auto">
          <Quote className="absolute left-4 top-0 -translate-y-1/2 text-main-purple md:w-8 md:h-8 bg-background" />
          <p className="text-primary-foreground p-4 md:p-8 text-center text-xl md:text-2xl font-medium">
            With great power comes great electricity bill
          </p>
        </div>
      </div>
    </>
  );
}
