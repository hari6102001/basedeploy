import { useState,useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import CountUp from "react-countup";
import Confetti from "react-confetti";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

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
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const expertiseFields = [
    { title: "INK FILLING M/C", icon: "🔧" },
    { title: "JIG & FIXTURE", icon: "⚙️" },
    { title: "DESIGN SERVICE", icon: "📐" },
    { title: "MANUFACTURING OF SPM M/C", icon: "🏭" },
    { title: "CONTROL PANEL WORK", icon: "🎛️" },
    { title: "CONVEYORS", icon: "⚡" }
  ];

  const leftLists = ["INK FILLING M/C", "JIG &FIXTURE ", "DESIGN SERVICE"];
  const rightLists = ["MANUFACTURING OF SPM M/C", "CONTROL PANEL WORK", "CONVEYORS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ossautomation@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

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
        background: "rgba(4, 7, 29, 0.4)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}

      
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          <div className={`${id === 1 } opacity-40`}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}</div>
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
        
        {id === 6 && (
          // add background animation , remove the p tag
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
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-2xl  font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

       {/* Special Effect div for id 3 & 4 (Smoke + Glass + Animation) */}
{(id === 4) && (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    {/* Smoke Effect */}
    <div className="absolute inset-0 smoke-effect"></div>

    {/* Color-Changing Glassmorphism Overlay */}
    <div className="absolute inset-0 glass-overlay"></div>

    {/* Animated Text */}
    <TypeAnimation
      sequence={[
        "We can do any customized designs and manufacturing automation machines ,We are ISO certified and Registered organisation, Always deliver standardized and customized client requirements without delays...", // First message
        2000
      ]}
      wrapper="h2"
      className="text-xl md:text-2xl font-light text-pink-200 text-center relative z-10"
      speed={50}
      repeat={Infinity} // Loop infinitely
    />
  </div>
)}

{(id === 3) && (
  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden glass-overlay text-pink-200">
    {(() => {
      const stats = [
        { label: "CLIENTS", target: 100, emoji: "👥" },
        { label: "DELIVERIES", target: 95, emoji: "🚚" },
        { label: "AWARDS", target: 55, emoji: "🏆" },
      ];

      const [isComplete, setIsComplete] = useState(false);
      let completedCount = 0;

      return (
        <div>
          {stats.map((stat, index) => (
            <div key={index} className="text-4xl font-bold flex items-center gap-4 my-2">
              <span className="text-5xl">{stat.emoji}</span>
              <CountUp 
                start={0} 
                end={stat.target} 
                duration={3} 
                onEnd={() => {
                  completedCount++;
                  if (completedCount === stats.length) {
                    setIsComplete(true);
                  }
                }} 
              />
              <span>{stat.label}</span>
            </div>
          ))}

          {isComplete && (
            <>
              <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} />
              <div className=" mt-5 animate-pulse">🎉 Celebrating 100+ client delivery🎉</div>
            </>
          )}
        </div>
      );
    })()}
  </div>
)}




          {/* Tech stack list div */}
          {id === 5 && (
            <div className="grid grid-cols-2 gap-4 p-6 relative z-10">
              {expertiseFields.map((field, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl mb-2">{field.icon}</div>
                  <div className="text-white/90 text-sm font-medium">
                    {field.title}
                  </div>
                </div>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy our email address"}
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
