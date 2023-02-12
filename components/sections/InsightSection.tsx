import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";
import arrow from "../../public//arrow.svg";
import { insights, newFeatures } from "@/utils/data";
import Image from "next/image";

interface Props {
  insight: {
    imgUrl: string;
    title: string;
    subtitle: string;
  };
}

const InsightsCom = ({ insight }: Props) => {
  return (
    <div className="md:flex items-center justify-between gap-0 md:gap-10 lg:gap-20 my-5 px-4">
      <div className="relative w-full mb-4 md:mb-0  h-52 md:w-full md:h-64 lg:w-96 lg:h-52 rounded-2xl overflow-hidden">
        <Image src={insight.imgUrl} fill alt={insight.title} />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">
          {insight.title}
        </h1>
        <h1 className="text-2xl text-gray-400">{insight.subtitle}</h1>
      </div>
      <div className="hidden lg:inline-block rounded-full border border-white p-5">
        <Image src={arrow} width={50} height={50} alt="arrow" />
      </div>
    </div>
  );
};
function InsightSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto"
    >
      <TypingText center={true} letter="| Insight" />
      <h1
        className="text-4xl lg:text-6xl font-bold mx-auto w-full lg:w-[80%] text-center"
        style={{ lineHeight: "5rem" }}
      >
        Insight about metaverse
      </h1>
      <div className="">
        {insights.map((insight, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.5, 0.5)}
            key={index}
          >
            <InsightsCom insight={insight} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default InsightSection;
