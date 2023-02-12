import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { socials } from "@/utils/data";
import Image from "next/image";

function FooterSection() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container relative mx-auto  my-16 px-4"
    >
      <motion.div variants={fadeIn("up", "tween", 0.3, 0.5)} className="my-6">
        <div className="md:flex justify-between my-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Enter the Metaverse
          </h1>
          <button className="bg-blue-700 text-white txt-xl px-4 py-2 rounded-full flex items-center gap-2 active:scale-95 transtion duration-150 ease-in-out my-6 md:my-0">
            <div className="relative w-7 h-7 rounded-full">
              <Image src={"/headset.svg"} fill alt="" />
            </div>
            Enter Metaverse
          </button>
        </div>
        <div className="w-full h-px bg-gray-600"></div>
        <div className="my-10 lg:flex justify-between">
          <h2 className="text-2xl font-bold">METAVERUS</h2>
          <p className="text-lg text-gray-400 my-6 lg:my-0">
            Copyright © 2021 - 2022 Metaversus. All rights reserved
          </p>
          <div className="flex gap-4 items-center">
            {socials.map((icon, index) => (
              <div
                key={index}
                className="relative w-7 h-7 cursor-pointer active:scale-90 transtion duration-150 ease-in-out"
              >
                <Image src={icon.url} fill alt={icon.name} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default FooterSection;
