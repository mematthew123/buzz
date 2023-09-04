import AgeVerifyModal from "@/components/AgeVerifyModal";
import ModalContext from "@/context/ModalContext";
import { AppProps } from "next/app";
import { useState } from "react";
import blurStyles from "../components/blur.module.css";
import "@/styles/globals.css";
import { CartProvider } from "@/context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CartProvider>
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <AgeVerifyModal />
        {/* <Navbar /> */}
        <div className={isOpen ? blurStyles.blur : ""}>
          {/* <Layout> */}
            <Component {...pageProps} />{" "}
          {/* </Layout> */}
        </div>
      </ModalContext.Provider>
    </CartProvider>
  );
}
