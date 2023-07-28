import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import Container from '../Components/Container/Container';
import { AuthContact } from '../Route/AuthProvider';
import { useContext } from 'react'
import  toast ,{ Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Login = () => {

     const { Login } = useContext(AuthContact)
     
     const handleSubmit = (event) => {
          event.preventDefault();
          const from = event.target;
          const password = from.password.value;
          const email = from.email.value;
          Login(email, password).then(result => {
               console.log(result);
             
               toast.success('Successfully Login')
          }).catch(err => {
               console.log(err.massage);
          })

     }
     return (
          <Container>
              
                    <div className="  md:h-[80vh] grid md:grid-cols-2 gap-5  items-center" >
                         <div className=" shadow-md p-3 rounded-md">
                         <form onSubmit={handleSubmit}>
                                   <h1 className=' text-4xl font-semibold my-1 '>Login</h1>
                                   <div className=" flex gap-3 items-center my-5 ">
                                        <FaFacebook className=' text-[#1977f2]' size={28}></FaFacebook>
                                        <FaGoogle className=' text-[#e112cc]' size={28}></FaGoogle>
                                        <FaGithub className=' text-[#030303]' size={28}></FaGithub>
                                   </div>
                                   <span className=' text-xl '>or use your account</span>
                                   <input type="email" placeholder="Email" />
                                   <input type="password" placeholder="Password" />
                                   <a href="#">Forgot your password?</a>
                                   <button type='submit' className='   block w-full text-center text-xl font-bold border-2 border-none mt-7 px-8 py-[5px] rounded-2xl  bg-[#43a4ea] hover:border-none text-white'>Login</button>
                                   <Link to={'/register'} className=' text-2xl font-medium  my-3 text-[#1932ee]'>Create New Account</Link>
                              </form> 
                               
                               
                         </div>
                         <div className="  textColor p-3 my-1 flex justify-center items-center gap-5 flex-col ">
                               <h1 className=' text-[#1b8af3] text-4xl font-semibold my-3'> Styleshere E-commerce Website</h1>
                               <p className=' text-2xl font-medium my-2 text-center '> Styleshere is a fashion e-commerce website <br /> that can market likes here</p>
                         </div> 
                    </div>
                    <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
              
          </Container>
     );
};

export default Login;