import React from 'react'
import { useState, useEffect } from 'react'

const Downloads = () => {

  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(true)
  const [deviceList, setDeviceList] = useState([])
  const [oem, setOem] = useState("")
  const [searchQuery, setSearchQuery] = useState("") // State for search query
  
  const oemToggle = async (deviceOem) => {
    // const doem = await deviceOem
    if (oem === deviceOem) {
      setOem(null)
      console.log(oem)
    } else {
      setOem(deviceOem)
      console.log(oem)
    }
  }

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay))
  }

  // Fetch the list of devices
  const fetchDevices = async () => {
    const url =
      "https://raw.githubusercontent.com/Project-PixelStar/official_devices/refs/heads/14/devices.json"

    try {
      const response = await fetch(url)
      const devicedata = await response.json()
      return devicedata
    } catch (error) {
      console.error("Error fetching devices:", error)
      return [] // Return an empty array on error
    } finally {
    }
  }

  // Fetch individual device data
  const fetchDeviceData = async () => {
    // Wait for all device data to be fetched
    const data = await Promise.all(
      devices.map(async (device) => {
        const durl = `https://raw.githubusercontent.com/Project-PixelStar/official_devices/refs/heads/14/devices/${device.codename}.json`
        try {
          const fetchedDevice = await fetch(durl)
          const fetchedDeviceData = await fetchedDevice.json()
          console.log(fetchedDeviceData.response[0])
          await timeout(0)
          return { codename: device, data: fetchedDeviceData.response[0] }
        } catch (error) {
          console.error(`Error fetching data for device ${device}:`, error)
          return { codename: device, data: null } // Handle errors for individual devices
        }
      }),
    )

    return data // Return the resolved data
  }

  // Load devices on component mount
  useEffect(() => {
    const loadDevices = async () => {
      const data = await fetchDevices()
      setDevices(data.devices) // Set state after fetching the device list
      console.log("Fetched devices:", data.devices) // Log the fetched data
    }

    loadDevices() // Call the async function inside useEffect
  }, [])

  // Fetch and set device data when the `devices` state updates
  useEffect(() => {
    const loadDeviceData = async () => {
      if (devices.length > 0) {
        const data = await fetchDeviceData()
        console.log("Fetched device data:", data) // Log fetched device data
        setDeviceList(data) // Set state with fetched device data
      }
    }

    loadDeviceData() // Call the async function when devices state changes
    // console.log(deviceList)
  }, [devices]) // Trigger when `devices` state changes

  useEffect(() => {
    console.log(deviceList)
    if (deviceList.length > 0) {
      setLoading(false)
    }
  }, [deviceList])


  return (
    <div>
      <div className='min-h-screen bg-custom-radial'>
        <div className='grid pt-40 pb-40 font-[FixelLight] w-4/5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

          {deviceList && !loading && (
            devices.map((device,index)=>(
              
              <div key={index} className='bg-opacity-40 bg-slate-900 text-white w-[90%] flex p-4 rounded-xl my-2'>
              <div className='w-full'>

                <img className='mx-auto h-[245px] object-contain' src={`https://github.com/Project-PixelStar/official_devices/blob/14/images/${device.codename}.png?raw=true`} alt="" />
              
                <div className='flex justify-between mt-5'>
                <span className='my-auto text-md text-slate-300'>Device</span>
                <span className='text-md rounded-full px-3 text-opacity-100 text-white bg-opacity-90 bg-black'>{device.codename}</span>
                </div>
                <h3 className='text-2xl font-[FixelBold]'>{device.model}</h3>
                <div className='mt-2'>
                  <span className='my-auto text-md text-slate-300'>Maintainer</span>
                  <br />
                <h7 className='text-xl'>{device.maintainer_name}</h7>
                </div>
    
                <div className='w-4/5 my-4 mx-auto'>
                <button className='w-full mx-auto bg-opacity-40 bg-black px-4 py-2 rounded-xl'>Download</button>
                </div>
    
              </div>
              </div>

            ))

          )
          }
         
         
         
         
         

        </div>
      </div>
    </div>
  )
}

export default Downloads