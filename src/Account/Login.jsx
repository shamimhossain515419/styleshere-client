import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'
import Container from '../Components/Container/Container';
import { AuthContact } from '../Route/AuthProvider';
import { useContext, useNavigate } from 'react'
import  toast ,{ Toaster } from 'react-hot-toast';
const Login = () => {

     const { Login } = useContext(AuthContact)
     const navigete = useNavigate();
     const handleSubmit = (event) => {
          event.preventDefault();
          const from = event.target;
          const password = from.password.value;
          const email = from.email.value;
          Login(email, password).then(result => {
               console.log(result);
               navigete('/')
               toast.success('Successfully Login')
          }).catch(err => {
               console.log(err.massage);
          })

     }
     return (
          <Container>
               <div className=' w-full mx-auto  md:h-screen   flex justify-center items-center mt-6'>
                    <div className="container" id="container">
                         <div className="form-container  log-in-container">
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
                              </form>
                         </div>
                         <div className="overlay-container p-3">
                              <div className="overlay">
                                   <div className="overlay-panel overlay-right">
                                        <h1 className=' text-3xl font-semibold my-2'>Styleshere E-commerce Website</h1>
                                        <p className=' text-xl font-medium'>Styleshere is a fashion e-commerce website that can market likes here</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
               </div >
          </Container>
     );
};

export default Login;