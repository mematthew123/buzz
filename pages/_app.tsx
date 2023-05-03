

import AgeVerifyModal from "@/components/AgeVerifyModal";
import ModalContext from "@/context/ModalContext";
import { AppProps } from "next/app";
import { useState } from "react";
import blurStyles from "../components/blur.module.css";
import '@/styles/globals.css'



export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <AgeVerifyModal />
        <div className={isOpen ? blurStyles.blur : ''}>
          <Component {...pageProps} />
        </div>
      </ModalContext.Provider>
    </>
  );
}
