import { FaFileInvoice } from "react-icons/fa";
import { IoCloudDownload, IoCloseCircleOutline } from "react-icons/io5";
import { motion, scale } from "framer-motion";
import type { DataItem } from "./types";
import type { RefObject } from "react";

interface CardsProps {
  data: DataItem;
  reference: RefObject<HTMLDivElement | null>;
}

const Cards = ({ data, reference }: CardsProps) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2}} 
    dragElastic={0.2}
    dragTransition={{bounceDamping:100, bounceStiffness:100}}
     className="relative h-72 w-60 bg-zinc-900/90 text-white rounded-[25px] px-5 py-8 overflow-hidden">
      <FaFileInvoice />
      <p className="text-sm font-light mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-500 ">
            {data.close ? <IoCloseCircleOutline /> : <IoCloudDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 bg-${data.tag.tagColor}-400 flex justify-center items-center font-semibold`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
