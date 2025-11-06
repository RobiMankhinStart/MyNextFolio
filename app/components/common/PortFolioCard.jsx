import Image from "next/image";
import React from "react";
import img from "../../../public/Image.png";
import FolioHoverCard from "./FolioHoverCard";

const PortFolioCard = () => {
  return (
    <div>
      <div
        data-aos="flip-left"
        data-aos-duration="3000"
        className="relative group  overflow-hidden shadow-lg "
      >
        <Image
          className=" object-cover rounded-md "
          src={img}
          width={310}
          height={310}
          alt="coverImg"
        />
        <FolioHoverCard />
      </div>
    </div>
  );
};

export default PortFolioCard;
