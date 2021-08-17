import Image from "next/image"
import { 
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    GlobeAltIcon,
    UserIcon
     } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white
        shadow-md p-8 md:px-10 ">
           
            {/* Left Logo */}
            <div className="relative flex items-center h-14
            cursor-pointer my-auto rounded-full">
                <Image src="https://faiye.co.uk/wp-content/uploads/2020/09/faiye_logo.jpg" 
                layout ="fill" 
                objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* Middle Search */}
            <div className="flex items-center md:border-2
            rounded-full ring-1 ring-gray-300 py-2">
                <input  className="flex-grow pl-5 bg-transparent text-sm hidden md:inline text-gray-600
                placeholder-gray-400" type="text" placeholder= "Rooms are available Here !!!" />
                 
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

        </header>
    )
}

export default Header

