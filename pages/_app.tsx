import AgeVerifyModal from "@/components/AgeVerifyModal";
import ModalContext from "@/context/ModalContext";
import { AppProps } from "next/app";
import { useState } from "react";
import blurStyles from "../components/blur.module.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <AgeVerifyModal />
        <div className={isOpen ? blurStyles.blur : ""}>
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        </div>
      </ModalContext.Provider>
    </>
  );
}
