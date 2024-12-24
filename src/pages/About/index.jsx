import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8 md:p-12">
      <div className="mt-28 sm:mt-36 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold ml-4 sm:ml-16 mb-6">
          About PixelStar
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed ml-4 sm:ml-16 text-gray-300">
          Discover a transformative Android experience with <strong>PixelStar Custom ROMs</strong>! This remarkable software enhancement combines the finest Pixel goodies, optimizations, and unparalleled smoothness, all built upon the solid foundation of AOSP.
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed ml-4 sm:ml-16 text-gray-300 mt-4">
          Bask in the glory of iconic Pixel features such as the <strong>Pixel Launcher</strong>, <strong>Pixel Wallpapers</strong>, and <strong>Next Gen Assistant</strong>, integrated seamlessly into your device. Say goodbye to lag and performance issues as PixelStar's meticulous optimizations ensure every tap and swipe is flawlessly responsive.
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed ml-4 sm:ml-16 text-gray-300 mt-4">
          Embrace a personalized touch with an array of thoughtful customizations, from status bar options to advanced theming. Unleash the true potential of your Android device and upgrade to PixelStar today!
        </p>
      </div>
    </div>
  );
}

export default About;

