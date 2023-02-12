import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { staggerContainer, textVariant } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomText";
import ExploreCart from "../ExploreCart";
import { exploreWorlds } from "@/utils/data";

function ExploreSection() {
  const [active, setActive] = useState<string>("world-2");

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
      id="Explore"
    >
      <div className="absolute lg:w-[50%] inset-0 gradient-03" />
      <TypingText center={true} letter={"| the World"} />
      <h1 className=" text-3xl md:text-4lg lg:text-6xl text-center w-full lg:w-[60%] font-bold mx-auto">
        Choose the world you want to explore
      </h1>
      <div className="my-10 container mx-auto flex flex-col lg:flex-row w-full">
        {exploreWorlds.map((item, index: number) => (
          <ExploreCart
            key={item.id}
            index={index}
            imgUrl={item.imgUrl}
            title={item.title}
            active={active}
            id={item.id}
            setActive={setActive}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default ExploreSection;
