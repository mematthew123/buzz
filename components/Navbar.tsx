import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useContext } from "react";
import CartContext from "@/context/cartContext";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const { cart } = useContext(CartContext)!; // Non-null assertion here
  const getTotalItemsInCart = () => {
    let total = 0;
    for (let item of cart) {
      total += item.quantity;
    }
    return total;
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("transparent");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#abd1c6");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <Image src='/Untitled.png' width={50} height={50} alt='logo' />
        </Link>
        <ul style={{ color: "#abd1c6" }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/menu'>Shop</Link>
          </li>
          <li className='p-4'>
            <Link href='/strains'>Strains</Link>
          </li>
          <li className='p-4'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='p-4'>
            <Link href='/news'>News</Link>
          </li>
          <li className='p-4'>
            <Link href='/cart'>
              <p>
                <AiOutlineShoppingCart size={20} style={{ color: "#abd1c6" }} className="inline-block" />
                {getTotalItemsInCart() > 0 && (
                  <span>{''}{getTotalItemsInCart()}</span>
                )}
              </p>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={25} style={{ color: "#abd1c6" }} />
          ) : (
            <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/menu'>Shop</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/strains'>Strains</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/about'>About</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/contact'>Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/news'>News</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
             <Link href='/cart'>
              <p className="inline-block">
                {getTotalItemsInCart() > 0 && (
                  <span>Cart {''}{getTotalItemsInCart()}</span>
                )}
              </p>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
