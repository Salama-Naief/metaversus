import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";

interface Props {
  imgUrl: string;
  title: string;
  index: number;
  id: string;
  active: string;
  setActive: Function;
}
function ExploreCart({ title, imgUrl, index, id, active, setActive }: Props) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`${
        active === id ? "h-96 md:h-96 lg:flex-[3]" : "h-24 md:h-32 lg:flex-[1]"
      } w-full lg:w-1/3 lg:h-[560px] my-4 px-2 cursor-pointer
      transtion duration-200 relative`}
      onClick={() => setActive(id)}
    >
      <motion.div className=" w-full h-full overflow-hidden rounded-xl relative">
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={title}
        />
        {active === id ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="absolute bottom-0 left-0 w-full h-fit p-6 text-white "
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl z-0"></div>
            <div className="relative w-fit h-fit p-3 ">
              <div className="w-full h-full absolute top-0 left-0 opacity-20 bg-white rounded-2xl"></div>
              <div className="relative w-7 h-7 rounded-full">
                <Image
                  src={"/headset.svg"}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt=""
                />
              </div>
            </div>
            <div className="relative z-10 ">
              <h3 className="text-xl my-5 ">ENTER METAVERSE</h3>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold ">
                {title}
              </h1>
            </div>
          </motion.div>
        ) : (
          <div className=" z-10 lg:-rotate-90 absolute bottom-5 lg:bottom-20 left-5 lg:left-0 w-full h-fit ">
            <h1 className="text-2xl md:text-4xl lg:text-3xl font-extrabold whitespace-nowrap">
              {title}
            </h1>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ExploreCart;
