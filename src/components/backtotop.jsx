import React from "react";
import { useEffect, useState} from "react";
import classNames from "classnames";

function BackToTop() {
  
  const scrollup = () => {
    console.log("check")
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="Btn"> 
      <button className={classNames({
              'theme-btn-shadow rounded-full bg-[#3B82F6]': true,
              'px-4 py-2': true,
              'monu text-sm text-white font-normal': true,
              'mobile:text-xs': true,
            })}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              height: "50px",
              width :"50px",
              fontSize : "25px",
              textAlign : "center",
              padding: "20px 10px 8px 10px",
            }}
            onClick={scrollup}>
        ^
      </button>
    </div>
  )
}

export default BackToTop;