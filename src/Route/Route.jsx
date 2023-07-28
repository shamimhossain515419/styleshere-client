import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductCategory from "../Pages/Product/ProductCategory/ProductCategory";
import AddCard from "../Pages/AddCard/AddCard";
import Login from "../Account/Login";
import Register from "../Account/Ragister/Register";
import Dashboard from "../Pages/Dashoard/Dashboard/Dashboard";
import DashboardAddCard from "../Pages/Dashoard/AddCard/DashboardAddCard";
import DashboardHome from "../Pages/Dashoard/Dashboard/DashboardHome";
import ErrorPage from "../Errorpage/Errorpage";
import Payment from "../Pages/payment/payment";
import Product from "../Pages/Product/Product";
import Trending from "../Pages/TrindingProduct/Trinding";

const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        children: [
                              {
                                    path: '/product/:category',
                                    element: <ProductCategory></ProductCategory>,
                                    loader: ({ params }) => fetch(`https://styleshere-server-site.vercel.app/product/${params.category ? params.category : 'bestSeller'}`)
                              },
                              
                        ]
                  },
                  {
                        path:'/trending',
                        element:<Trending></Trending>
                  },
                  {
                        path: 'addcard/:id',
                        element: <AddCard></AddCard>,
                        loader: ({ params }) => fetch(`https://styleshere-server-site.vercel.app/product/addcard/${params.id}`)
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },

                  {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>,
                        children: [
                              {
                                    path: '/dashboard',
                                    element:<DashboardHome></DashboardHome>
                              }
                              ,
                              {
                                    path: '/dashboard/addcard',
                                    element: <DashboardAddCard></DashboardAddCard>
                              }
                              ,
                              {
                                    path: '/dashboard/payment/:id',
                                    element: <Payment></Payment>,
                                    loader:({params}) => fetch(`http://localhost:5000/addcard/${params.id}`)
                              }
                        ]
                  }
            ]

      }
])


export default Route;