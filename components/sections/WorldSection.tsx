import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";

import { newFeatures } from "@/utils/data";
import Image from "next/image";
import map from "../../public/map.png";
import people01 from "../../public/people-01.png";
import people02 from "../../public/people-02.png";
import people03 from "../../public/people-03.png";
function WorldSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container mx-auto"
    >
      <TypingText center={true} letter="| People on the World" />
      <h1
        className="text-4xl lg:text-6xl font-bold mx-auto w-full lg:w-[80%] text-center"
        style={{ lineHeight: "5rem" }}
      >
        Track friends around you and invite them to play together in the same
        world
      </h1>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="relative my-10 h-fit"
      >
        <Image src={map} width={map.width} height={map.height} alt="" />
        <Image
          src={people01}
          width={people01.width}
          height={people01.height}
          alt=""
          className="scale-50 lg:scale-75 w-fit absolute -top-3 lg:top-1/4 left-2 lg:left-36"
        />
        <Image
          src={people02}
          width={people02.width}
          height={people02.height}
          alt=""
          className="scale-50 lg:scale-75 w-fit absolute top-1/4 md:top-1/2 lg:bottom-3/4 left-1/2 lg:left-1/2"
        />
        <Image
          src={people03}
          width={people03.width}
          height={people03.height}
          alt=""
          className="scale-50 lg:scale-75 w-fit absolute bottom-4 lg:bottom-1/2 right-1 lg:right-1/4"
        />
      </motion.div>
    </motion.section>
  );
}

export default WorldSection;
