import CountdownTimer from "./CountdownTimer";

const OfferPage = () => {
     return (
          <div className=" text-white flex justify-center items-center w-full h-[50vh] object-cover" style={{ backgroundImage: 'url("https://i.ibb.co/KNpXh9w/Parallax-img-1880x.webp")' }}>


               <div className=" text-center">
                    <p className=" text-2xl font-medium my-4"> SPECIAL OFFER</p>
                    <h1 className=" text-5xl font-bold my-2">  SALE UP TO 70% OFF</h1>

                    <p className=" my-3"> Quisquemos sodales suscipit ditaemcos condimentum de cosmo.</p>
                    <CountdownTimer></CountdownTimer>
                    <button className=' my-8  text-xl font-bold border-2 border-white px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none  text-white'>Shop Now</button>
               </div>
          </div>
     );
};

export default OfferPage;