import { useState } from 'react';
import './Trending.css'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const TrendingCard = ({ product }) => {

     const [Open, setOpen] = useState(false)
     const { img1, img2, name, rating, description, category, price, id } = product;
     return (
          <div className=' hover:shadow-xl  hover:p-2 rounded'>
               <div>
                    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="product h-[400px]  relative cursor-pointer ">
                         <div className="product-img h-[400px]   object-cover overflow-hidden">
                              <img src={img1} alt="" />
                              <img src={img2} alt="" className="rear-img duration-700" />


                         </div>
                         <div className={` ${Open ? "block" : "hidden "}   absoluteButton min-w-[200px]  top-[60%] duration-700  translate   origin-top  text-xl font-bold border-2 border-[#43a4ea] px-8 py-[5px] rounded-2xl hover:bg-[#43a4ea] hover:border-none hover:text-white`}>Add to card</div>
                    </div>
                    <div className=' p-2 '>
                         <h3 className=' textColor text-xl font-medium'>{name} </h3>
                         <Rating
                              style={{ maxWidth: 100 }}
                              value={rating}
                              readOnly
                         />
                         <p  className=' text-xl textColor font-medium'>  $ {  price}.00 </p>
                    </div>

               </div>
          </div>
     );
};

export default TrendingCard;