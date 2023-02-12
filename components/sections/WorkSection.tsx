import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";

import { exploreWorlds, startingFeatures } from "@/utils/data";
import Image from "next/image";

interface StepsProps {
  index: number;
  title: string;
}
const StepsCom = ({ index, title }: StepsProps) => {
  return (
    <div className="flex items-center gap-2 my-8">
      <div className="p-4 rounded-2xl bg-gray-700 font-bold text-2xl">
        0{index + 1}
      </div>
      <div className="text-gray-500 text-xl">{title}</div>
    </div>
  );
};
function WorkSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="lg:grid lg:grid-cols-2  container mx-auto px-4"
    >
      <motion.div
        variants={planetVariants("left")}
        className="h-[360px] lg:h-full w-full relative overflow-x-clip"
      >
        <Image
          src={"/get-started.png"}
          fill
          objectFit="contain"
          objectPosition="center"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.5, 1)}
        className="w-full  lg:w-[80%]"
      >
        <TypingText center={false} letter={"| How Metaverus Works"} />
        <h1 className="text-4xl lg:text-6xl font-bold mb-10 mt-2">
          Get started with just a few clicks
        </h1>
        {startingFeatures.map((feature, index) => (
          <div key={index}>
            <StepsCom index={index} title={feature} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default WorkSection;
