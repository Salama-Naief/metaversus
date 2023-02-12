import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";
import search from "@/public/search.svg";
import menu from "@/public/menu.svg";
function Navbar() {
  console.log("va", navVariants);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="p-6  relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className="container m-auto flex items-center justify-between ">
        <div className="rounded-full p-2 active:scale-95 hover:bg-gray-800 transition duration-150 cursor-pointer">
          <Image src={search} alt="search" />
        </div>
        <h1 className="text-3xl text-white font-extrabold uppercase font-serif">
          METAVERSUS
        </h1>
        <div className="rounded-full p-2 active:scale-95 hover:bg-gray-800 transition duration-150 cursor-pointer">
          <Image src={menu} alt="search" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
