import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

// type Props = {
//     one: string;
//     two: string;
//     three: string;
//     heading: string;

// }


const Pickup = ({ one, two, three, heading }) => {
  return (
    <div className="xl:w-[578px] h-[136px] bg-white flex flex-col xl:my-7 mt-5 rounded-xl justify-center">
        <h3 className='px-7 py-2 flex items-center font semi-bold text-lg'>
            <span className="pr-2 text-primary">
                <FaRegDotCircle />
            </span>
            {heading}
        </h3>

        <div className="grid grid-cols-3">
            <div className="border-r px-6">
                <h4 className= "font-semibold font-font px-1 sm:text-lg">{one}</h4>
                <select name="" id="" className="text-xs text-text sm:text-sm">
                    <option value="">Select City</option>
                    <option value="">Ibadan</option>
                    <option value="">Lagos</option>
                    <option value="">Kano</option>
                    <option value="">Abuja</option>
                    <option value="">Benin</option>
                    <option value="">Osun</option>
                    <option value="">Enugu</option>
                    <option value="">Port Hacourt</option>
                    <option value="">Kaduna</option>
                </select>
            </div>

            <div className="border-r px-3">
                <h4 className="px-1 font-semibold font-font sm:text-lg">{two}</h4>
                <select name="" id="" className="text-xs text-text sm:text-sm">
                    <option value="">Select date</option>
                </select>
            </div>
            <div className="px-3">
                <h4 className="px-1 font-semibold font-font sm:text-lg">{three}</h4>
                <select name="" id="" className="text-xs text-text sm:text-sm">
                    <option value="">Select Time</option>
                    <option value="">9am</option>
                    <option value="">12pm</option>
                    <option value="">3pm</option>
                    <option value="">6pm</option>
                </select>
            </div>
        </div>
      
    </div>
  )
}

export default Pickup
