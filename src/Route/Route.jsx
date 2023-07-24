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

const Route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        children: [
                              {
                                    path: '/product/:category',
                                    element: <ProductCategory></ProductCategory>,
                                    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.category ? params.category : 'bestSeller'}`)
                              }
                        ]
                  },
                  {
                        path: 'addcard/:id',
                        element: <AddCard></AddCard>,
                        loader: ({ params }) => fetch(`http://localhost:5000/product/addcard/${params.id}`)
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
                        ]
                  }
            ]

      }
])


export default Route;