"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menulinks from './Menunav';
import "./style.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll()
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 left-0 w-full bg-custom-white z-20 ${isScrolled ? 'activess' : ''}`}>
      <div className='flex max-w-[1663px] m-auto px-3 py-[18px] items-center  justify-between 2xl:justify-normal relative'>
        <div className='flex gap-[170px] items-center'>
          <div>
            <Link href={"/"}>
              <Image className='md:min-w-[194.47px] w-[150px]' src="./logoipsum.svg" width={194.47} height={35.82} alt="logo ipsum" />
            </Link>
          </div>
          <div className='hidden 2xl:flex gap-[88px] items-center'> {/* Hide on mobile screen */}
            <Menulinks />
            <div className='hidden 2xl:flex gap-[35px]'>
              <Link href={"/"}><span className='text-[15px] font-normal'>STORE</span></Link>
              <Link href={"/"}>
                <Image className='min-w-[24px]' src="./user.svg" width={24} height={24} alt="User" />
              </Link>
              <Link href={"/"}>
                <Image className='min-w-[24px]' src="./cart.svg" width={24} height={24} alt="User" />
              </Link>
            </div>
          </div>
        </div>
        <div className="2xl:hidden"> {/* Show on mobile */}
          <button onClick={isMenuOpen ? closeMenu : toggleMenu}>
            <Image
              src={isMenuOpen ? "/close-btn.svg" : "/hamburger-icon.svg"}
              width={30}
              height={30}
              alt={isMenuOpen ? "Close Menu" : "Menu"}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`menu-wrapper ${isMenuOpen ? 'open' : ''}`}> {/* Show on mobile ---- when menu is open */}
          <Menulinks />
        </div>
      )}
    </header>
  );
}

export default Header;
