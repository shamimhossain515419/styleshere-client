import About from "../../About/About";
import Product from "../../Product/Product";
import Trending from "../../TrindingProduct/Trinding";

import Banner from "../Bannar/Bannar";

const Home = () => {
     return (
          <div>
             <Banner></Banner>
             <About></About>  
             <Trending></Trending>
             <Product></Product>
          </div>
     );
};

export default Home;