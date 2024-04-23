import React from "react";
import { IoMdDownload } from "react-icons/io";

export default function Pictures({ data }) {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="download">
        <p>{data.photographer}</p>
        <a target="_blank" href={data.src.large} className="btn">
          <IoMdDownload />
        </a>
      </div>
    </div>
  );
}
