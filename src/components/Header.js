import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return ()=> unsubscribe();
},[])

  function handleSignOut(){
    signOut(auth).then(() => {
      
      
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
      className="w-44"
      src= {LOGO}
      alt="logo"/>
      {user && <div className="flex p-2">
      <img 
      className="w-12 h-12"
      alt="profile-icon" src={user.photoURL} />
      <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
