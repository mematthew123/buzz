import React, { useState, useEffect } from "react";
import {client} from "@/sanity/lib/client";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerText, setBannerText] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    client
      .fetch('*[_type == "banner"][0]')
      .then((banner) => {
        setBannerText(banner.text);
        setIsVisible(banner.isVisible);
        setIsLoaded(true);
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    console.log('Closing banner...');
    setIsVisible(false);
  }

  if (!isVisible || !isLoaded) {
    return null;
  }

  return (
    <div className="top-0 w-full h-32 bg-black text-white z-50 flex justify-center items-center relative">
      <h1 className="text-4xl">{bannerText}</h1>
      <button 
        onClick={handleClose} 
        className="absolute top-0 right-0 mt-4 mr-4 text-2xl text-white"
      >
        X
      </button>
    </div>
  );
};

export default Banner;
