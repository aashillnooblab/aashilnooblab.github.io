import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeviceDownloads = () => {
  const { codename } = useParams();
  const [deviceDetails, setDeviceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      const url = `https://raw.githubusercontent.com/Project-PixelStar/official_devices/refs/heads/14/builds/${codename}.json`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDeviceDetails(data.response[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching device details:", error);
        setLoading(false);
      }
    };
    fetchDeviceDetails();
  }, [codename]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader className="animate-spin h-16 w-16 mb-4" />
          <p className="text-xl font-semibold">Loading device details...</p>
        </div>
      </div>
    );
  }

  if (!deviceDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8 flex items-center justify-center">
        <p className="text-white text-center text-2xl font-semibold">Device details not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 sm:p-8 flex items-center justify-center">
      <div className="mt-28 max-w-6xl w-full bg-gray-800 bg-opacity-50 p-14 rounded-xl shadow-lg flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
          <img
            src={`https://github.com/Project-PixelStar/official_devices/blob/14/images/${codename}.png?raw=true`}
            alt={deviceDetails.device}
            className="w-full h-auto object-contain rounded-lg shadow-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
        <div className="lg:w-2/3 pl-0 lg:pl-8">
          <h1 className="text-4xl font-bold mb-6 text-center lg:text-left">{deviceDetails.device}</h1>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <InfoItem label="Maintainer" value={deviceDetails.maintainer} />
            <InfoItem label="OEM" value={deviceDetails.oem} />
            <InfoItem label="Version" value={deviceDetails.version} />
            <InfoItem label="Build Type" value={deviceDetails.buildtype} />
            <InfoItem label="File Name" value={deviceDetails.filename} />
            <InfoItem label="File Size" value={`${(deviceDetails.size / (1024 * 1024 * 1024)).toFixed(2)} GB`} />
            <InfoItem label="Build Date" value={new Date(deviceDetails.timestamp * 1000).toLocaleString()} />
          </div>
          <div className="space-y-4">
            <ActionButton
              href={deviceDetails.download}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Download Build
            </ActionButton>
            {deviceDetails.forum && (
              <ActionButton
                href={deviceDetails.forum}
                className="bg-green-600 hover:bg-green-700"
              >
                Forum Link
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="text-base">
    <span className="font-semibold text-lg">{label}:</span> {value}
  </div>
);

const ActionButton = ({ href, className, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`block ${className} text-center py-4 rounded-lg text-white text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105`}
  >
    {children}
  </a>
);

export default DeviceDownloads;
