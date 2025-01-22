import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    function toggleSignIn(){
        setIsSignIn((prev)=>!prev);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-gray-500 rounded-md focus:border-2"
        />}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-gray-500 rounded-md focus:border-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-gray-500 rounded-md focus:border-2"
        />
        <button className="p-4 my-6 bg-red-700 w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign up now.": "Already registered? Sign in now."}</p>
      </form>
    </div>
  );
};

export default Login;
