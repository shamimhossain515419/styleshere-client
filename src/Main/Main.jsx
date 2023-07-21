import Footer from "../Shayer/Footer/Footter";
import Navbar from "../Shayer/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
const Main = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;