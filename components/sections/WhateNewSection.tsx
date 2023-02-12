import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";

import { newFeatures } from "@/utils/data";
import Image from "next/image";

interface StepsProps {
  item: { imgUrl: string; title: string; subtitle: string };
}
const NewCom = ({ item }: StepsProps) => {
  return (
    <div className=" my-8 w-fit">
      <div className="p-4 w-fit rounded-2xl bg-gray-700 font-bold text-2xl">
        <div className="relative w-8 h-8">
          <Image
            src={item.imgUrl}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={item.title}
          />
        </div>
      </div>
      <div className="text-2xl font-bold my-5">{item.title}</div>
      <div className="text-gray-400 text-xl">{item.subtitle}</div>
    </div>
  );
};
function WhateNewSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="lg:grid lg:grid-cols-2 container mx-auto overflow-x-clip p-4"
    >
      <div>
        <TypingText center={false} letter={"| Whats new?"} />
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          className="w-full  lg:w-[90%]"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-5 mt-2">
            What's new about Metaversus?
          </h1>
          <div className="grid grid-cols-2">
            {newFeatures.map((item, index) => (
              <div key={index} className="lg:w-2/3">
                <NewCom item={item} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={planetVariants("right")}
        className="h-[360px] lg:h-full w-full relative overflow-x-clip"
      >
        <Image
          src={"/whats-new.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt=""
        />
      </motion.div>
    </motion.section>
  );
}

export default WhateNewSection;
