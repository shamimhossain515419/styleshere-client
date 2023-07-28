import { useContext } from "react";
import Container from "../../Components/Container/Container";
import toast, { Toaster } from 'react-hot-toast';
import { IoMdPhotos } from 'react-icons/io'
import { AuthContact } from "../../Route/AuthProvider";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
     const { CreateUser, updateProfilePhoto } = useContext(AuthContact)
     const [passwordShow, setPasswordShow] = useState(false);
     const [imgLoading, setImageLoading] = useState(false)
     const [image, setImage] = useState(false)

     const navigete = useNavigate();
     const handleSubmit = (event) => {
          event.preventDefault();
          const from = event.target;

          const name = from.name.value;
          const password = from.password.value;
          const email = from.email.value;
          console.log(password, email);
          CreateUser(email, password).then((result) => {

               const user = result.user;
               navigete('/')
               console.log(user);
               updateProfilePhoto(name, image).then(result => {
                    console.log(result);
                    toast.success('Successfully Register')
               }).catch(error => {
                    console.log(error);
               })

          }).catch((err) => {
               console.log(err.massage);
               toast.error("Register fill.")
          });

     }


     const handleimage = (event) => {
          const selectedImage = event.target.files[0];
          setImageLoading(true)
          const Imagebb_URL = `https://api.imgbb.com/1/upload?key=a51250151cc877a01d697ac0a493b3bd`
          const formData = new FormData();
          formData.append('image', selectedImage);
          fetch(Imagebb_URL, {
               method: "POST",
               body: formData
          }).then(res => res.json()).then(data => {
               if (data?.data?.display_url) {
                    setImage(data?.data?.display_url)
                    setImageLoading(false)
               }
          })
     }
     console.log(image);
     return (
          <div className=" my-10 ">

               <Container>
                    <div className="md:max-w-4xl my-3  mt-20 mx-auto shadow-md  p-2">
                         <div>
                              <h1 className=" text-3xl font-bold my-3 text-blue-500 text-center"> Register  Now </h1>
                              <form onSubmit={handleSubmit}>

                                   <div className=" w-full my-2 text-start">
                                        <label htmlFor="Name" className=" text-xl font-bold">Name</label>
                                        <input className=" text-base font-medium   outline-blue-600  border-none " type="text" name="name" id="" />

                                   </div>
                                   <div className=" w-full my-2 text-start">
                                        <label htmlFor="Email" className=" text-xl font-bold">Your Email</label>
                                        <input className=" text-base font-medium   outline-blue-600  border-none " type="email" name="email" id="" />

                                   </div>
                                   <div className=" w-full my-2 text-start">
                                        <label htmlFor="Password" className=" text-xl font-bold">Password</label>
                                        <input className=" text-base font-medium   outline-blue-600  border-none " type={`${passwordShow ? passwordShow : "password"}`} name="password" id="" />

                                   </div>

                                   <div className="w-full  mb-5 text-start">
                                        <p onClick={() => setPasswordShow(!passwordShow)} className=" cursor-pointer text-lg font-medium  my-1  underline">Show password</p>
                                   </div>

                                   <div className=" w-full my-2 text-start">

                                        {image ?
                                             <h1 className=" text-[#0456da] text-xl font-medium">Upload Photo Success</h1> : <label className=" flex gap-2 items-center" htmlFor="photo">
                                                  <IoMdPhotos size={32} className=" text-blue-500"></IoMdPhotos>
                                                  <input onChange={handleimage} className=" hidden" type="file" name="" id="photo" />
                                                  <p className="  text-2xl font-medium "> Take Photo</p>
                                             </label>
                                        }



                                   </div>

                                   <div className=" w-full my-2 text-start">
                                        <button className='   block w-full text-center text-xl font-bold border-2 border-none mt-7 px-8 py-[5px] rounded-2xl  bg-[#43a4ea] hover:border-none text-white'>Register</button>
                                   </div>
                                   <Link to={'/login'} className=' text-2xl font-medium  my-3 text-[#1932ee]'>login</Link>

                              </form>
                         </div>
                    </div>
               </Container>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default Register;