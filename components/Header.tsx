import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const text = "Buzz Genetics";

  const shouldFlicker = (char:string) => {
    // Add any character(s) you want to flicker, for example 'g', 't'
    return ["z"].includes(char.toLowerCase());
  };

  const renderCharacters = () => {
    return text.split("").map((char, index) => {
      const flickerClass = shouldFlicker(char) ? "flicker" : "";
      return (
        <span
          key={index}
          className={`${styles.neonChar} ${styles[flickerClass]}`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <header className="bg-black py-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className={styles.neonWrapper}>{renderCharacters()}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
