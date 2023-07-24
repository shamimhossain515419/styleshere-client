import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";




const Dashboard = () => {
     return (
          <div className=" p-3 xl:px-4">
               <div className=" flex gap-3  ">
                    <div className=" bg-[#aca6a696] md:h-[85vh] p-2 md:min-w-[300px] xl:min-w-[350px]">
                    <DashboardNavbar></DashboardNavbar>

                    </div>

                    <div className=" w-full mx-auto ">
                      <Outlet>

                      </Outlet>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;