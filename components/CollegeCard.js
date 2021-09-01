import Image from 'next/image'
function CollegeCard({id,name,place,away,price,dprice,rating,feedback,img,offer,best,rank,match}){
    return(
         <div className="w-[90%] border shadow-xl m-2  mx-8 px-2 border-l-4 border-blue-600 my-10 cursor-pointer ">
      <div className="relative h-80  border ">
        <Image src={img} layout="fill" className="z-10 hover:scale-x-105 transform transition duration-300 ease-out rounded-xl z-10" />
       <p className="absolute right-2 top-[-5] bg-blue-300 text-white px-8 z-50">Promted</p>
       <p className="absolute right-2 top-8 bg-blue-300 text-white px-8 z-50">{rating }/5<br/><p>{feedback}</p></p>
       <div className="flex  items-center text-center absolute left-2 bottom-4 w-full  text-white pl-2 z-50">
            
                    <p className="rounded-xl bg-white text-sm text-black px-2 bordernone">{best}</p>

                    <p className="rounded-xl bg-white text-sm text-black px-2 ">{away}</p>

           <div className="ml-auto ">
                <p className="text-sm w-ful mr-4 rounded-xl bg-white text-sm text-black  ">#{rank} in 260 college in north campus</p>
           </div>
       </div>
      </div>
        <div className="flex">
            <div>
            <h3 className="font-bold sm:text-2xl ">{name}</h3>
             <h1 className="text-sm ">{place} | <span className="font-thin">{away}from bus stand</span></h1>
             <h1><span className="text-sm sm:text-sm md:text-lg text-green-600">{match} %match</span > 2Km km gn nagar,7km from rajiv chowk</h1>
            <h1 className="text-xs rounded-lg mb-4 sm:rounded-3xl sm:m-1 sm:p-2 bg-blue-200">{offer} | <button className="border px-4">login</button></h1>
            </div>
            <div className="ml-auto">
            <del className="text-black ml-3 bg-white text-sm">{price} </del><span className="bg-red-500">20%off</span>
            <h1 className="text-sm">{dprice} per sem (3month)</h1>
            <p className="text-sm md:text-lg text-green-600">Free cancelaation * free Wi-Fi</p>
            </div>
        </div>
      
    </div>
    )
}
export default CollegeCard