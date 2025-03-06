import React from "react";
import Table from "../../components/table/Table";
import { motion } from "framer-motion";
import { ShowPage } from "../../utils/FramerAniamtion";
function Transactions() {
  return (
    <motion.div
      variants={ShowPage}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="rounded-xl  h-screen  lg:p-5 sm:p-1 bg-secondery-color"
    >
      <h6 className="font-normal text-[20px] text-secondery-color">
        Top Channels
      </h6>
      <Table />
    </motion.div>
  );
}

export default Transactions;
