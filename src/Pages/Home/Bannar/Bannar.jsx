import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '../../../Components/Container/Container';


const Banner = () => {
     return (
          <div>
               <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                         delay: 3500,
                         disableOnInteraction: false,
                    }}


                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
               >
                    <SwiperSlide>


                         <div className=' flex justify-center items-center  h-full     object-cover w-full   ' style={{ backgroundImage: "url('https://i.ibb.co/9pcgBf6/mix-slider-02.jpg')", height: '60vh' }}>

                              <Container>
                                   <div className=' textColor'>
                                        <div className=' space-y-3 w-2/3 md:w-1/2'>
                                             <h1 className=' text-xl textColor md:text-3xl font-bold '> Summer time 2023</h1>
                                             <h2 className=' text-2xl  uppercase  md:text-4xl font-bold'> Flash Sale Off 70%</h2>
                                             <p className=' text-base font-medium'> If "STYLESPHERE" refers to a new concept, library, framework, or any other technology related to web development, I don't have information about it in my training data. To get accurate and up-to-date information</p>
                                             <button className=' text-xl font-bold border-2 border-black px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none hover:text-white'>Shop Now</button>
                                        </div>
                                   </div>
                              </Container>


                         </div>


                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='  flex justify-center items-center  h-full   object-cover w-full   ' style={{ backgroundImage: "url('https://i.ibb.co/Z614t6T/slider1-1-1.jpg')", height: '60vh' }}>
                              <Container>
                                   <div className=' textColor'>
                                        <div className=' space-y-3 w-2/3 md:w-1/2'>
                                             <h1 className=' text-xl textColor md:text-3xl font-bold '> Summer time 2023</h1>
                                             <h2 className=' text-2xl  uppercase  md:text-4xl font-bold'> Flash Sale Off 70%</h2>
                                             <p className=' text-base font-medium'> If "STYLESPHERE" refers to a new concept, library, framework, or any other technology related to web development, I don't have information about it in my training data. To get accurate and up-to-date information</p>
                                             <button className=' text-xl font-bold border-2 border-black px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none hover:text-white'>Shop Now</button>
                                        </div>
                                   </div>
                              </Container>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className='  flex    items-center  h-full    object-cover w-full   ' style={{ backgroundImage: "url('https://i.ibb.co/PrbnTT2/home-default-bg1.webp')", height: '60vh' }}>
                              <Container>
                                   <div className=' textColor'>
                                        <div className=' space-y-3 w-2/3 md:w-1/2'>
                                             <h1 className=' text-xl textColor md:text-3xl font-bold '> Summer time 2023</h1>
                                             <h2 className=' text-2xl  uppercase  md:text-4xl font-bold'> Flash Sale Off 70%</h2>
                                             <p className=' text-base font-medium'> If "STYLESPHERE" refers to a new concept, library, framework, or any other technology related to web development, I don't have information about it in my training data. To get accurate and up-to-date information</p>
                                             <button className=' text-xl font-bold border-2 border-black px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none hover:text-white'>Shop Now</button>
                                        </div>
                                   </div>
                              </Container>
                         </div>
                    </SwiperSlide>


               </Swiper>
          </div>
     );
};

export default Banner;