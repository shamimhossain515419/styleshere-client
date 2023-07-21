import Container from "../../Components/Container/Container";

const About = () => {
     return (
          <div className=" mt-20">
               <Container>
                    <div className="grid   md:grid-cols-2  items-center gap-6 ">
                         <div>
                              <img className=" rounded-md h-[500px]   object-cover" src="https://i.ibb.co/j6S2GM6/Rectangle-16.webp" alt="" />
                         </div>
                         <div className=" space-y-4 ">
                              <h1  className=" my-5 text-2xl md:text-4xl font-bold textColor"> Tiered broderie mini sundress in white</h1>
                              <p className=" text-lg font-medium textColor"> Wre talking swirly scrunchies, bow headbands and more super-cute, 90s-inspired bits. And to wrap up things up, check out Pieces for womens hat and scarf sets thatll make cold-weather dressing a breeze.</p>
                              <button className=' text-xl font-bold border-2 border-black px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none hover:text-white'>Shop Now</button>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default About;