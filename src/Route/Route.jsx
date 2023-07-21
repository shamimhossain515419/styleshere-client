import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductCategory from "../Pages/Product/ProductCategory/ProductCategory";

const Route = createBrowserRouter([
     {
           path:'/',
           element:<Main></Main>,
           children:[
               {
                    path:'/',
                    element:<Home></Home>,
                    children:[
                         {
                           path:'/product/:category',
                           element:<ProductCategory></ProductCategory> ,
                           loader:({params})=>fetch(`http://localhost:5000/product/${params.category}`)   
                         }
                    ]
               }
           ]

     }
])


export default Route;