import React from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { staggerContainer, textVariant } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";

function AboutSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-16 relative"
    >
      <div className="absolute  gradient-02" />
      <TypingText center={true} letter={"| About Metaversus"} />
      <motion.div
        variants={textVariant(0.5)}
        className=" px-6 w-full lg:w-[80%] text-gray-400 mx-auto text-xl lg:text-3xl"
      >
        <span className="text-2xl lg:text-4xl text-white font-bold">
          Metaverse
        </span>{" "}
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it &apos;s really real, you can feel what you feel in this
        metaverse world, because this is really the{" "}
        <span className="text-2xl lg:text-4xl text-white font-bold">
          madness of the metaverse
        </span>{" "}
        of today, using only{" "}
        <span className="text-2xl lg:text-4xl text-white font-bold">VR</span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let&apos;s{" "}
        <span className="text-2xl lg:text-4xl text-white font-bold">
          {" "}
          explore
        </span>{" "}
        the madness of the metaverse by scrolling
        <BsArrowDown color="white" size={28} className="mx-auto my-5" />
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
