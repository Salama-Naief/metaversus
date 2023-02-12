import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import {
  fadeIn,
  staggerContainer,
  planetVariants,
  zoomIn,
} from "@/utils/motion";
import Image from "next/image";
import planet from "../../public/planet-09.png";
import stamp from "../../public/stamp.png";
function FeedbackSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container relative mx-auto lg:grid lg:grid-cols-3 gap-6 my-16 px-4 overflow-x-clip"
    >
      <div className="feedback-gradient"></div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        className="px-5 pt-20 relative  rounded-3xl border border-gray-600 text-gray-300 mb-5 lg:mb-0 "
      >
        <motion.div
          variants={zoomIn(0.5, 0.5)}
          className="absolute -right-24 top-5 z-20 h-44 w-44 hidden lg:inline-block"
        >
          <Image
            src={stamp.src}
            width={stamp.width}
            height={stamp.height}
            alt=""
            className=""
          />
        </motion.div>
        <h3 className="text-4xl font-bold my-4">Samantha</h3>
        <h6 className="text-2xl ">Founder Metaverus</h6>
        <p
          className="py-10 text-2xl md:text-3xl"
          style={{ lineHeight: "3rem" }}
        >
          “With the development of today&apos;s technology, metaverse is very
          useful for today&apos;`s work, or can be called web 3.0. by using
          metaverse you can use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        className="col-span-2 relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden"
      >
        <Image src={planet} fill alt="" />
      </motion.div>
    </motion.section>
  );
}

export default FeedbackSection;
