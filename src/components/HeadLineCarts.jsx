import React from "react";

const HeadLineCarts = () => {
	return (
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
         {/* cart */}
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
               <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
               <p className="px-2">Through 8/26</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" " />
         </div>
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
               <p className="font-bold text-2xl px-2 pt-4">We Delivered Desserts</p>
               <p className="px-2">Tasty Treats</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" " />
         </div>
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
               <p className="font-bold text-2xl px-2 pt-4">New Restaurant </p>
               <p className="px-2">Added Daly</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
            </div>
            <img className="max-h-[1600px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />
         </div>
      </div>
   )
};

export default HeadLineCarts;
