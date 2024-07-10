import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { Globe } from "./Globe";
import {GlobeDemo}from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import TechStack from "./Techstack";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
}


) => {
  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id===6}&& 'flex justify-center h-full'`}>

        <div className="w-full h-full absolute">
          {
            img&&<img
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover, object-center')}
            />
          }

        </div>

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id===6&&(
          <BackgroundGradientAnimation>
            <div className="absolute z-50 text-white flex items-center font-bold justify-center">

            </div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
          </div>

          <div className={cn("font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-neutral-600 dark:text-neutral-300/90 mb-2 mt-2", titleClassName)}>
          {title}
        </div>
      

      {id===2&&
        <GlobeDemo/>
      }

     {id === 3 && <TechStack id={3} />}

     {id===6 &&(
      <div className="mt-5 relative">
        <div className={`absolute -bottom-5 right-0`}>
           
        </div>

      </div>
     )}
      </div>
      
    </div></div>
  );
};