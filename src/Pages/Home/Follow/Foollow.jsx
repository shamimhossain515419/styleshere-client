import { Link } from 'react-router-dom'
const Follow = () => {
   return (
      <div className=" my-8 p-2 md:p-6">

         <div className=" md:grid md:grid-cols-3 gap-2">
            <div>
               <div className=" grid md:grid-cols-2">
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185034621_302205118059280_8001579493472320579_n.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185257520_296471205289815_7268810879596248810_n_1.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185302493_469518340987137_6417083914974483678_n_1.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185044438_475719940173150_6225441777847578152_n.jpg" alt="" />
                  </div>
               </div>
            </div>
            <div className=" flex justify-center items-center textColor">
               <div>

                  <h3 className=" text-2xl my-2 font-medium text-center"> #Shamim hosaain</h3>
                  <h1 className="  text-4xl font-bold"> SHARE IN THE LOVE.</h1>
                  <div className=' my-4 '>
                     <Link className=' text-xl font-bold border-2 border-[#095bf3] px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea]    hover:border-none uppercase hover:text-white'>FOLLOW US ON INStagram</Link>
                  </div>
               </div>
            </div>
            <div>
               <div className=" grid md:grid-cols-2">
               <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185243232_1013288472536134_7883287065369235056_n_1.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185927670_4040011492748968_7670520837393662727_n.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/184944521_236512094917865_8511409390553875909_n.jpg" alt="" />
                  </div>
                  <div className=' w-full overflow-hidden'>
                     <img className=' hover:scale-125 duration-500 ' src="https://blueskytechmage.com/minimog/media/wysiwyg/185149295_173456944690412_4155048109806501290_n.jpg" alt="" />
                  </div>
                 </div>
            </div>
         </div>

      </div>
   );
};

export default Follow;