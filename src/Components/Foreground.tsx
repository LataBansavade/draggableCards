
import { useRef } from "react";
import Cards from "./Cards"
import type { DataItem } from "./types";

const Foreground = () => {

  const ref = useRef<HTMLDivElement>(null)
  
  const data: DataItem[] = [
    {
      desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      fileSize : ".8mb",
      close : true,
      tag : {isOpen: true , tagTitle: "Download Now" ,tagColor : "green"}
    },

     {
      desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      fileSize : ".8mb",
      close : true,
      tag : {isOpen: false , tagTitle: "Download Now" ,tagColor : "blue"}
    },

     {
      desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      fileSize : ".8mb",
      close : true,
      tag : {isOpen: true , tagTitle: "upload" ,tagColor : "blue"}
    }


  ]
  return (
    <>
    <div ref={ref} className=" fixed top-0 left-0 z-3 w-full h-full flex gap-10 flex-wrap">
      {
        data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))
      }
      
    </div>
    </>
  )
}

export default Foreground