import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import defImg from "./defaultImg.jpg";

const Newscards = (props) => {
  let { image, title, date, body, url } = props;

  const onImageError = (e) => {
    e.target.src = defImg;
  };

  return (
    <div
      key={url}
      className="mx-auto w-[300px] h-[450px] hover:shadow-2xl rounded-lg  overflow-hidden"
    >
      <div className="overflow-hidden hover:scale-110 transition-all ease-in-out duration-500">
        <img
          src={image ? image : defImg}
          alt="image"
          className="w-[300px] h-[150px] object-cover"
          onError={onImageError}
        />
      </div>
      <div className="px-3 pt-3 overflow-hidden">
        <p className="font-semibold line-clamp-2 h-[50px]">{title}</p>
        <p className="w-fit bg-slate-100 p-2 text-xs rounded-full my-2  h-[30px]">
          {date}
        </p>
        <p className="line-clamp-4 leading-7  h-[110px]">{body}</p>
        <button className="mt-5 px-3 py-2 rounded-lg bg-slate-800 text-white font-semibold ">
          <a href={url} target="_blank">
            Read more
          </a>
        </button>
      </div>
    </div>
  );
};

export default Newscards;
