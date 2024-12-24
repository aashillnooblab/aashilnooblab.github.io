import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Loader as LucideLoader } from "lucide-react"; // Import Loader from lucide-react

const Downloads = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  const fetchDevices = async () => {
    const url =
      "https://raw.githubusercontent.com/Project-PixelStar/official_devices/refs/heads/14/devices.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.devices || [];
    } catch (error) {
      console.error("Error fetching devices:", error);
      return [];
    }
  };

  const fetchDeviceData = async (devices) => {
    return Promise.all(
      devices.map(async (device) => {
        const url = `https://raw.githubusercontent.com/Project-PixelStar/official_devices/refs/heads/14/devices/${device.codename}.json`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          return { ...device, ...data.response[0] };
        } catch (error) {
          console.error(`Error fetching data for device ${device.codename}:`, error);
          return { ...device, error: true };
        }
      })
    );
  };

  useEffect(() => {
    const loadDevices = async () => {
      const fetchedDevices = await fetchDevices();
      setDevices(fetchedDevices);
      setLoading(false); // Set loading to false after devices are fetched
    };
    loadDevices();
  }, []);

  useEffect(() => {
    const loadDeviceData = async () => {
      if (devices.length > 0) {
        const data = await fetchDeviceData(devices);
        setDeviceList(data);
      }
    };
    loadDeviceData();
  }, [devices]);

  const filteredDevices = useMemo(() => {
    return deviceList.filter((device) =>
      device.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [deviceList, searchQuery]);

  return (
    <div className="min-h-screen bg-custom-radial">
      <div className="w-4/5 mx-auto pt-40 pb-10">
        <input
          type="text"
          className="w-full p-3 rounded-2xl focus:outline-none bg-opacity-20 bg-black text-white mb-8"
          placeholder="Search for a device..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {loading ? (
          <div className="h-screen flex items-center justify-center space-x-4">
            <LucideLoader className="animate-spin text-white h-10 w-10" /> {/* Use Lucide Loader here */}
            <p className="text-white">Loading devices...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevices.map((device, index) => (
              <div
                key={index}
                className="bg-opacity-40 bg-slate-900 text-white p-6 rounded-xl"
              >
                <img
                  className="mx-auto h-[245px] object-contain"
                  src={`https://github.com/Project-PixelStar/official_devices/blob/14/images/${device.codename}.png?raw=true`}
                  alt={device.model}
                />
                <h3 className="text-2xl font-[FixelBold] mt-4">{device.model}</h3>
                <p className="text-slate-300 mt-2">Maintainer: {device.maintainer_name}</p>
                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/downloads/${device.codename}`)}
                    className="w-full bg-opacity-40 bg-black px-4 py-2 rounded-xl"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloads;
