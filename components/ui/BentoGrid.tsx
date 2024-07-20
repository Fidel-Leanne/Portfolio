"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import TechStack from "./Techstack";
import { useState } from "react";
import AnimationData from '@/data/confetti.json';
import Lottie from 'react-lottie';
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const list1 = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "React Native",
  "Expo"
];

const list2 = [
  "Node.js",
  "Express.js",
  "Django",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "RESTful APIs",
  "GraphQL"
];

const list3 = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Java",
  "C"
];

const list4 = [
  "Docker",
  "CI/CD (GitHub Actions, Jenkins)",
  "Git",
  "GitHub",
  "AppWrite",
  "SuperBase"
];

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "leannemau3@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(0,0,0)",
        backgroundColor: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,55,55,1) 100%)"
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={cn("font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-neutral-600 dark:text-neutral-300/90 mb-2 mt-2", titleClassName)}>
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && <TechStack id={3} />}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
