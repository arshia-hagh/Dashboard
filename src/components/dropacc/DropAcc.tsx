import React from "react";
import Logo from "../../assets/img/Photo.png";
import { motion } from "framer-motion";
function DropAcc() {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden", pointerEvents: "none" }}
      transition={{ duration: 1, type: "tween", ease: "easeOut" }}
      animate={{ opacity: 1, visibility: "visible", pointerEvents: "fill" }}
      className="fixed bg-secondery-color rounded-xl shadow-[0_1px_2px_0_rgba(0, 0, 0, 0.25)] top-24 right-8 z-[100]"
    >
      <form
        className="h-[55px] border-b-[1px] border-[#f8f8f84f] py-[10px] px-5 relative w-full"
        action=""
      >
        <input
          className="h-full outline-none pl-5 bg-transparent text-[#B6BFC8]  text-[17px] font-normal w-full"
          type="text"
          placeholder="Search..."
        />
        <button className="absolute top-[30%] left-4">
          <svg
            width="15"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4115 12.349H12.5885L12.2969 12.0677C13.3177 10.8802 13.9323 9.33854 13.9323 7.66146C13.9323 3.92187 10.901 0.890625 7.16146 0.890625C3.42187 0.890625 0.390625 3.92187 0.390625 7.66146C0.390625 11.401 3.42187 14.4323 7.16146 14.4323C8.83854 14.4323 10.3802 13.8177 11.5677 12.7969L11.849 13.0885V13.9115L17.0573 19.1094L18.6094 17.5573L13.4115 12.349ZM7.16146 12.349C4.56771 12.349 2.47396 10.2552 2.47396 7.66146C2.47396 5.06771 4.56771 2.97396 7.16146 2.97396C9.75521 2.97396 11.849 5.06771 11.849 7.66146C11.849 10.2552 9.75521 12.349 7.16146 12.349Z"
              fill="#B6BFC8"
            />
          </svg>
        </button>
      </form>
      <div className="py-2 px-5">
        <div className="flex my-2 items-center gap-[10px]"> 
          <input className="accent-transparent" type="checkbox" />
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" />
            <div className="flex flex-col justify-center ">
              <h6 className="text-secondery-color font-medium">Nat</h6>
              <span className="text-secondery-color text-[15px] font-normal opacity-60">
                nat@info.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <input className="accent-transparent" type="checkbox" />
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" />
            <div className="flex flex-col justify-center ">
              <h6 className="text-secondery-color font-medium">Nat</h6>
              <span className="text-secondery-color text-[15px] font-normal opacity-60">
                nat@info.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DropAcc;
