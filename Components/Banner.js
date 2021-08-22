import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" >
           <Image src="https://wallpaperaccess.com/full/1339694.jpg"  
           layout="fill" objectFit="cover" className="h-full" />
           <div className=" absolute top-1/2 w-full text-center text-yellow-400">
               <p className="text-2xl sm:text-xl md:text-5xl ">Let's Faiye Welcome You</p>

               <button className="text-purple-500 bg-white px-5 py-2
               shadow-md rounded-lg font-semibold my-5 border border-purple-300 hover:shadow-xl 
               hover:text-white hover:bg-purple-600 hover:border-transparent active:scale-90 transition-150">Explore Now</button>

           </div>
        </div>
    )
}

export default Banner
