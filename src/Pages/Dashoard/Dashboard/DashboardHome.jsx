import { useContext } from "react";
import { AuthContact } from "../../../Route/AuthProvider";
import Container from "../../../Components/Container/Container";
import Title from "../../../Components/Title/Tittle";

const DashboardHome = () => {
     const { user } = useContext(AuthContact);


     return (
          <div>
               <Container>


                    <div>
                         <div className=" my-10">
                              <Title title={"Welcome  Your Dashboard"}></Title>
                         </div>

                         <div className=" grid md:grid-cols-2 gap-8">

                              <div className=" rounded-md w-full cursor-pointer  overflow-hidden">
                                   <img className=" hover:scale-125 w-full duration-300  object-cover" src="https://i.ibb.co/GMyc27J/ricky-2131549808.jpg" alt="" />
                              </div>
                         <div className=" w-full rounded-md cursor-pointer  overflow-hidden">
                              <img className=" hover:scale-125 w-full duration-300  object-cover" src="https://i.ibb.co/c6N7WQT/ricky-2127760710.jpg" alt="" />
                         </div>
                         </div>
                    </div>

                    <div className=" flex justify-center flex-col  items-center ">
                         <img src={user?.photoURL} className=" block mx-auto w-20 h-20 rounded-full my-10" alt="" />
                          <h1 className=" text-3xl textColor  capitalize font-semibold my-2">Name:  {user?.displayName} </h1>
                          <h1 className=" text-xl  textColor font-semibold my-2">Email:  {user?.email} </h1>
                           
                    </div>
               </Container>

          </div>
     );
};

export default DashboardHome;