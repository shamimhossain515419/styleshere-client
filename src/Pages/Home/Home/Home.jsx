import About from "../../About/About";
import OfferPage from "../../OfferPage/OfferPage";
import Product from "../../Product/Product";
import Trending from "../../TrindingProduct/Trinding";

import Banner from "../Bannar/Bannar";
import Follow from "../Follow/Foollow";
import HappyCustomer from "../HappyCustomar/HappyCustomar";

const Home = () => {
     return (
          <div>
             <Banner></Banner>
             <About></About>  
             <Trending></Trending>
             <Product></Product>

             <OfferPage></OfferPage>

             <HappyCustomer></HappyCustomer>

             <Follow></Follow>
          </div>
     );
};

export default Home;