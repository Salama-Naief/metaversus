import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  SlSocialReddit,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import cover from "@/public/cover.png";
import stamp from "@/public/stamp.png";
function HeroSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" relative overflow-x-clip"
    >
      <div className="hero-gradient " />
      <div className="text-white  font-bold flex items-center justify-center pt-10 container mx-auto">
        <div className="text-gray-400 hidden md:flex items-center font-normal cursor-pointer h-fit hover:text-gray-300 transtion duration-150">
          <div className="h-4 mx-1 w-px bg-gray-400  "></div>
          Home
        </div>
        <div className="mx-auto w-fit flex flex-col justify-items-center relative z-20">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white "
          >
            METAVERSE
          </motion.h1>

          <motion.div
            variants={textVariant(1.5)}
            className="flex items-baseline  font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            <div>MA</div>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <div>NESS</div>
          </motion.div>
        </div>
        <div className=" flex-col gap-6 hidden md:flex">
          <SlSocialReddit
            size={28}
            className="cursor-pointer hover:text-gray-400 transtion duration-150"
          />
          <SlSocialTwitter
            size={28}
            className="cursor-pointer hover:text-gray-400 transtion duration-150"
          />
          <SlSocialInstagram
            size={28}
            className="cursor-pointer hover:text-gray-400 transtion duration-150"
          />
        </div>
      </div>
      <div className="flex justify-end relative ">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative w-[90%]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <div className=" w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-20 relative overflow-hidden">
            <Image
              src={cover}
              layout={"fill"}
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </div>
          <a href="#Explore">
            <Image
              src={stamp}
              width={130}
              height={130}
              alt=""
              className="absolute -bottom-16  right-10 lg:right-14 z-20"
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
