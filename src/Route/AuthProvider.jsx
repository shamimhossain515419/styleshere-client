import { createContext, useEffect, useState } from "react";


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



import app from "../Firebase/Firebase.confog";
export const AuthContact = createContext();
const AuthProvider = ({ children }) => {

     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null)
     const auth = getAuth(app);
     const GoogleProvider = new GoogleAuthProvider();

     const CreateUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const GoogelSing = () => {
          return signInWithPopup(auth, GoogleProvider)
     }
     const updateProfilePhoto = (name, photo) => {
          return updateProfile(auth?.currentUser, {
               displayName: name,
               photoURL: photo,
          })
     }
     const Login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               console.log(currentUser);
               // if (currentUser?.email) {
               //      axios.post('https://music-school-server.vercel.app/jwt')
               //      .then(data=>{
               //            localStorage.setItem('access-token', data.data.token)
               //      }).catch(error=>{
               //            console.log(error);
               //      })
               //      setLoading(false)
               // } else {
               //      localStorage.removeItem('access-token')
               // }
             

          })
          return () => {
               unsubcript()
          }
     }, []);

     const LogOut = () => {
          return signOut(auth)
     }

     const userInfo = {
          CreateUser,
          LogOut,
          loading,
          GoogelSing,
          Login,updateProfilePhoto,
          user
     }

     return (
          <div>
               <AuthContact.Provider value={userInfo}>
                    {children}
               </AuthContact.Provider>
          </div>
     );
};

export default AuthProvider;