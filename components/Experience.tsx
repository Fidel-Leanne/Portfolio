import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-yellow-600">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
          key={card.id}
          // Random duration for the animation
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            // Background gradient for a black look
            background: "rgb(0, 0, 0)", // Solid black color
            backgroundColor:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 100%)", // Black gradient
            // Border radius to make the border moving effect more realistic
            borderRadius: `calc(1.75rem * 0.96)`,
          }}
        
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;