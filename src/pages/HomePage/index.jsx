import React from 'react';
import phone1 from '../../assets/phone1.svg';
import phone2 from '../../assets/phone2.svg';
import ghlogo from '../../assets/ghlogo.svg';
import telelogo2 from '../../assets/telelogo2.svg';
import discussions from '../../assets/discussions.svg';
import phone from '../../assets/phone.png';

const HomePage = () => {
  return (
    <div className="text-white font-[FixelVariable] ">
      {/* Hero Section */}
      <div className="h-[800px] sm:h-screen bg-custom-radial xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="mx-auto my-auto text-center md:text-left px-4 sm:px-6 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-8xl opacity-70">
              <span className="font-[FixelBold]">Pixel</span>
              <span className="font-[FixelRegular]">Star</span>
            </h1>
            <p className="w-4/5 mx-auto md:mx-0 text-lg sm:text-xl opacity-70 font-[FixelLight] mt-4">
              An android-based open source operating system for various devices.
            </p>
            <div className="flex flex-row sm:flex-row justify-center md:justify-start w-4/5 mx-auto md:mx-0 my-5 font-[FixelRegular] gap-5">
              <button className="bg-white opacity-70 px-12 sm:px-16 text-black rounded-full py-3 text-base sm:text-lg">
                Download
              </button>
              <button className="text-black opacity-70 rounded-full">
                <img className="w-10 sm:w-12" src={ghlogo} alt="GitHub Logo" />
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className="max-w-full h-[90%] sm:h-[125%] md:h-[125%] absolute bottom-[116px] sm:bottom-0 z-40"
              src={phone}
              alt="Phone"
            />
          </div>
        </div>
      </div>

      {/* What is PixelStar Section */}
      <div className="w-11/12 sm:w-4/5 mx-auto my-10 py-10 px-6 sm:px-12 md:px-20 rounded-xl bg-[#2B2826]">
        <h5 className="text-3xl sm:text-4xl md:text-5xl font-[FixelVariable]">
          What is <span className="font-[FixelBold]">Pixel</span>Star
        </h5>
        <p className="text-base sm:text-lg font-[FixelLight] mt-5">
          PixelStar aims to provide users with a Pixel-like feel, as it should
          be, with enough tweaks of the experiences to differentiate with
          Pixel.
        </p>
      </div>

      {/* Version Highlights */}
      <div className="my-10 flex flex-col sm:flex-row gap-6 justify-center sm:justify-between w-11/12 sm:w-4/5 mx-auto">
        <div className="p-6 sm:p-8 rounded-xl w-full sm:w-[48%] bg-[#FFD3B7] text-[#392E27]">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-[FixelBold]">
            Pixel<span className="font-[FixelVariable]">Star</span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">Uday</span>
          </h4>
          <p className="text-sm sm:text-base md:text-lg font-[FixelLight] mt-4">
            PixelStar Uday is the latest, most stable version of PixelStar that
            provides a bunch of customization with a balanced amount of
            stability!
          </p>
          <button className="px-6 sm:px-8 mt-4 rounded-full bg-[#392E27] text-[#FFD3B7]">
            Learn More
          </button>
        </div>
        <div className="p-6 sm:p-8 rounded-xl w-full sm:w-[48%] bg-[#D2DDFF] text-[#272B39]">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-[FixelBold]">
            Pixel<span className="font-[FixelVariable]">Star</span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">Pratah</span>
          </h4>
          <p className="text-sm sm:text-base md:text-lg font-[FixelLight] mt-4">
            PixelStar Pratah is the cutting-edge version of PixelStar that
            provides enough customization based on the latest Android release.
          </p>
          <button className="px-6 sm:px-8 mt-4 rounded-full bg-[#272B39] text-[#D2DDFF]">
            Coming Soon
          </button>
        </div>
      </div>

      {/* Support Links */}
      <div className="my-10 flex flex-col sm:flex-row gap-6 justify-center sm:justify-between w-11/12 sm:w-4/5 mx-auto">
        <div className="p-6 sm:p-8 flex space-x-4 sm:space-x-6 rounded-xl w-full sm:w-[48%] bg-[#9EBDE1] text-[#2A2E32]">
          <img className="w-10 sm:w-12" src={telelogo2} alt="Telegram Channel" />
          <p className="text-lg sm:text-2xl font-[FixelBold] my-auto">
            Telegram Channel
          </p>
        </div>
        <div className="p-6 sm:p-8 flex space-x-4 sm:space-x-6 rounded-xl w-full sm:w-[48%] bg-[#FFD89A] text-[#322C22]">
          <img className="w-10 sm:w-12" src={discussions} alt="Discussions & Support" />
          <p className="text-lg sm:text-2xl font-[FixelBold] my-auto">
            Discussion & Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
