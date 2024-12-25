import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ghlogo from '../../assets/ghlogo.svg';
import telelogo from '../../assets/telelogo.svg';
import pslogo from '../../assets/pslogo.svg';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="font-[FixelVariable] mt-5 font-light py-4 z-50 w-[90%] mx-auto rounded-full px-6 md:px-16 text-white bg-black shadow-custom-opacity backdrop-filter backdrop-blur-lg bg-opacity-5 fixed right-0 left-0">
        <div className="flex justify-end md:justify-between items-center">
          {/* Links for Desktop */}
          <div className="hidden md:flex justify-baryan-shandilyas-projects-4b241611/psetween text-lg font-semibold space-x-20">
            <Link to={'/'}>Home</Link>
            <Link to={'/downloads'}>Downloads</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/team'}>Team</Link>
            <a href="https://blog.project-pixelstar.xyz">Blog</a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-8">
            <img onClick={() => window.open("https://github.com/Project-PixelStar", '_blank')}  src={ghlogo} alt="GitHub" className="w-6 h-6 cursor-pointer" />
            <img onClick={() => window.open("https://t.me/pixelstarchannel", '_blank')} src={telelogo} alt="Telegram" className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Logo */}
          <div className='flex py-[8px] md:hidden focus:outline-none'>
          <div className='left-8 top-5  absolute md:hidden'>
            <a href="/">
              <img src={pslogo} height={36} width={36} alt="Logo" />
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="text-white" size={24} />
          </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="text-white text-2xl font-semibold space-y-8">
            <Link to={'/'} onClick={toggleMenu} className="block font-[FixelVariable]">Home</Link>
            <Link to={'/downloads'} onClick={toggleMenu} className="block font-[FixelVariable]">Downloads</Link>
            <Link to={'/about'} onClick={toggleMenu} className="block font-[FixelVariable]">About</Link>
            <Link to={'/team'} onClick={toggleMenu} className="block font-[FixelVariable]">Team</Link>
            <a href='https://blog.project-pixelstar.xyz' onClick={toggleMenu} className='block font-[FixelVariable]'>Blog</a>
          </div>
          <div className="flex gap-8 mt-12">
            <img src={ghlogo} alt="GitHub" className="w-8 h-8" />
            <img src={telelogo} alt="Telegram" className="w-8 h-8" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

