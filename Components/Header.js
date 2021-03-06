import Image from "next/image"

import { 
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
    UserIcon,
    UsersIcon
     } from '@heroicons/react/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    
    const handleSelect = (ranges) => {
         setStartDate(ranges.selection.startDate);
         setEndDate(ranges.selection.endDate);
    }; 

    const resetInput = () => {
        setSearchInput("");
    };

    const search =() =>{
        router.push({
            pathname: "/search",
            query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            noOfGuests,
            },
        })
    }
    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key: "selection",   
    };

    return (
        <div className="">
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white
        shadow-md p-8 md:px-10 ">
           
            {/* Left Logo */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-14
            cursor-pointer my-auto">
                <Image src="https://faiye.co.uk/wp-content/uploads/2020/09/faiye_logo.jpg" 
                layout ="fill" 
                objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* Middle Search */}
            <div className="flex items-center rounded-full border-2 py-2 md:shadow-md outline-none">
                <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none text-sm  text-gray-600
                placeholder-gray-500" type="text" placeholder= {placeholder || "Type London !!!"} />
                 
                 <SearchIcon className="hidden md:inline-flex h-12 bg-red-400 text-white 
                 rounded-full p-3.5 cursor-pointer md:mx-3.5" />
            </div>

            {/* Right Utilities*/}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline text-gray-900 cursor-pointer hover:rounded-full
                 hover:bg-gray-100 px-6 py-4">Become a Host</p>
                <GlobeAltIcon className="text-gray-700 h-5" />
                <div className="flex items-center space-x-2.5 border-[1px] p-2 rounded-full">
                    <MenuIcon className="h-6  cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col justify-center bg-white p-2 mt-2 rounded-b-lg rounded-t-sm shadow-sm col-span-3 lg:w-auto mx-auto">
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()} 
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                    />
                    <div className="flex items-center border-b pb-4 mb-3">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of Guests
                            </h2>
                            <UsersIcon className="h-5" />
                            <input value = {noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            type="number" 
                            min = {1}
                            className="w-12 pl-2 text-lg outline-none text-red-400" 
                            />
                    </div>
                    <div className="flex bg-white pt-4  shadow-sm rounded-b-lg">
                        <button onClick={resetInput} className="flex-grow rounded-lg bg-white hover:bg-red-400 hover:shadow-md p-2 mr-1 transiton duration-300 hover:text-white  text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow rounded-lg bg-white text-red-400 hover:shadow-md hover:bg-red-400 p-2 transiton duration-300 hover:text-white">Search</button>
                    </div>

                </div>
            )}

        </header>
        </div>
    )
}

export default Header

