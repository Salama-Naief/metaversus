import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2, titleVariant } from "@/utils/motion";

interface Props {
  letter: String;
  center: boolean;
}
export function TypingText({ letter, center }: Props) {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${
        center && "justify-center"
      } text-lg text-gray-400 my-4 flex items-center `}
    >
      {Array.from(letter).map((item, index) => (
        <motion.span variants={titleVariant} key={index}>
          {item === " " ? <pre> </pre> : item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function TitleText({ letter }: Props) {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="text-center text-lg text-gray-400 my-4 flex items-center justify-center"
    >
      <div className="h-6 mx-2 w-0.5 bg-gray-500" />
      {letter}
    </motion.h2>
  );
}
