"use client";
import Image from "next/image";
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect} from "react";
import { motion } from "framer-motion";

import TechStack from "@/data/TechStack";
import TechStackIcon from "@/components/TechStackIcon";
import {fadeIn} from "@/variants";

import backgroundImage from "@/public/background.webp";
import coverImage from "@/public/cover.jpg";

export default function Home() {

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Vaibhav Verma', 'TheCoderwithHat', 'a Full Stack Developer.'],
      autoStart: true,
      loop: true,
    });
  })

  return (
    <main className="overflow-x-hidden">
      <div className="relative flex flex-col w-screen h-screen items-center xl:items-start">
        <div className="absolute bg-contain -z-10 h-screen">
          <Image src={backgroundImage} alt="background_image" className="h-screen w-screen" quality={100}/>
        </div>
        <div className="xl:w-[80%] xl:ml-[10%]">
          <div
            className="mt-[25%] lg:mt-[15%] items-center w-full flex flex-col xl:flex-row xl:justify-between xl:items-center select-none">
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-center text-[1.75rem] xl:text-[2.25rem] 2xl:text-[3rem]">👋 Hello there,</h1>
              <p className="text-center text-[2rem] xl:text-[2.5rem] 2xl:text-[3.25rem] font-name h-20">
                I am <span className="font-bold" id="typewriter"></span>
              </p>
              <div className="hidden xl:block mt-12 w-[75%] text-xl xl:text-2xl text-slate-200">
                I am a sophomore at Manipal University Jaipur, a keen learner
                & frontend end developer.<br/>
              </div>
            </div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-contain -z-10 mt-12 lg:right-[10rem] lg:top-[10rem] xl:top-[10rem] xl:right-[8rem] 2xl:top-[12.5rem] 2xl:right-[15rem] 3xl:top-[15rem] 3xl:right-[20rem]">
              <Image src={coverImage} alt="background_image"
                     className="rounded-full w-[15rem] xl:w-[20rem] 2xl:w-[25rem] 3xl:w-[30rem]" quality={100}/>
            </motion.div>
          </div>
          <div className="xl:hidden mt-12 px-8 w-full text-center text-xl text-slate-200">
          I am a sophomore at Manipal University Jaipur, a keen learner
          & frontend end developer.<br/>
          </div>
        </div>
      </div>

      <div className="relative flex w-screen h-screen flex-col">
        <div className="pt-12 h-max sm:h-screen" style={{
          backgroundImage: `url('/Background1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}>
          <h1 className="text-center text-[2.5rem] sm:text-[3rem] font-bold font-name bg-gradient-to-r ease-in-out from-violet-300 via-violet-500
           to-violet-300 bg-clip-text text-transparent animate-text"
          >
            &lt;About Me /&gt;
          </h1>
          <div className="flex justify-center">
            <div className="w-[80%] py-5 flex flex-col gap-4 lg:text-xl text-slate-100 2xl:text-2xl">
              <p>
               I am a passionate and dedicated developer with a strong focus on web development and a growing interest in machine learning.
               My journey in the tech world has been driven by a love for solving problems and creating impactful solutions I am always having a keen
               interest in learning new technology.
              </p>
              
              <div
                className="flex flex-col gap-1 justify-center font-about 2xl:flex-wrap 2xl:gap-0 2xl:flex-row 3xl:flex-row 3xl:w-full 3xl:justify-between">
                <div className="2xl:w-1/2 2xl:py-2 flex flex-row gap-1">
                  <div>📆</div>
                  <div>Developing since 2023.</div>
                </div>
                <div className="2xl:w-1/2 2xl:py-2 flex flex-row gap-1 justify-end pr-4">
                  <div>👨‍💻</div>
                  <div>Frontend Developer.</div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="pt-8 sm:pt-16">
            <h1  className="text-center text-[2.5rem] sm:text-[3rem] font-bold font-name bg-gradient-to-r
             ease-in-out from-violet-300 via-violet-500 to-violet-300 bg-clip-text text-transparent animate-text">
              &lt;Tech stack /&gt;
            </h1>
            <div
              className="flex justify-center">
              <div className="w-10/12 sm:w-3/4 flex flex-wrap justify-center gap-4 mt-8">
                {TechStack.map((tech) => (
                  <TechStackIcon key={tech.name} icon={tech.icon} name={tech.name}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
