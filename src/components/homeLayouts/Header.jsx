import React from 'react'
import { Link } from "react-router-dom"
import car1 from "../../assets/car1.svg"
import car2 from "../../assets/car2.svg"
import Pickup from '../Micro Comp/Pickup'
import Switch from "../../assets/Switch.svg";
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="container mx-auto py-8 px-4 md:px-10">
      <div className="flex justify-between space-x-5">
        <motion.div className="lg:w-[640px] bg-cover w-full rounded-lg bg-[url('./assets/ads.svg')] h-min" initial={{ scale: 0.7 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 10,
                damping: 10
              }}>
          <div className="p-5 w-full">
            <h1 className="text-white text-xl sm:text-3xl font-font font-medium lg:w-[320px]">The Best Platform for Car Rental</h1>
            <p className="text-small py-3 w-[300px] font-font text-white">Ease of doing a car rental safely and reliably. Of course at a low
              price.</p>
            <Link href="">
            <button className="bg-primary font-font py-2 px-2 rounded-lg text-white"> Rental Car</button>
            </Link>
            <div className="flex justify-center items-center w-full">
              <img src={car1} alt=""/>
            </div>
          </div>
        </motion.div>

        <motion.div className="lg:w-[640px] hidden lg:block bg-cover w-full rounded-lg bg-[url('./assets/ads2.svg')] h-min" initial={{ scale: 0.7 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 10,
                damping: 10
              }}>
          <div className="p-5 w-full">
            <h1 className="text-white text-xl sm:text-3xl font-font font-medium lg:w-[320px]">The Best Platform for Car Rental</h1>
            <p className="text-small py-3 w-[300px] font-font text-white">Providing cheap car rental services and safe and comfortable facilities.</p>
            <Link href="">
            <button className="bg-[#54A6FF] font-font py-2 px-2 rounded-lg text-white"> Rental Car</button>
            </Link>
            <div className="flex justify-center items-center w-full">
              <img src={car2} alt=""/>
            </div>
          </div>
        </motion.div>
      </div>


      <section className=" relative flex xl:flex-row flex-col justify-between w-full">
            <Pickup one="Locations" two="Date" three="Time" heading="Pick-Up"/>

            <div className="absolute top-32 xl:top-16 flex justify-center items-center w-full">
              <img
                src={Switch}
                alt="ads"
                width={110}
                height={110}
                className="rounded-md"
              />
          </div>

          <Pickup one="Locations" two="Date" three="Time" heading="Drop-Off" />
        </section>
    </header>
  )
}

export default Header
