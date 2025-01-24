import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleButtonClick(){
    const message = validateData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    if(message){
      return;
    }
    if(!isSignIn){
      //sign up logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user); 
    updateProfile(user, {
      displayName: nameRef.current.value, photoURL: "https://occ-0-2857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      )
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }else{
      //sign in logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  }
  function toggleSignIn() {
    setIsSignIn((prev) => !prev);
  }
  const inputClasses =
    "p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-gray-500 rounded-md focus:border-2";
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input ref={nameRef} type="text" placeholder="Full Name" className={inputClasses} />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className={inputClasses}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className={inputClasses}
        />
        {errorMessage && <p>{errorMessage}</p>}
        
        <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
