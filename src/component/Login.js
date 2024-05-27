import React, { useRef, useState } from "react";
import Header from "./Header";
import { FormValidation } from "../utilis/FormValidation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const[errorMessage,setErrorMessage]=useState(null) 
  const email = useRef(null);
  const password = useRef(null);
  const handelIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleSign = () => {
    const validateMessage = FormValidation(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(validateMessage)
  };
  return (
    <div className="relative z-1">
      <Header />

      <div className="absolute z-8">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-2xl opacity-90"
      >
        <h1 className="py-4 font-bold text-3xl">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {isSignIn && (
          <input
            className="p-2 my-4 w-full bg-gray-700"
            name="name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-gray-700"
          name="Email or mobile number"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-2 w-full  bg-gray-700"
          name="Password"
          placeholder="password"
        />
         <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          type="signIn"
          className="p-2 my-4 w-full bg-red-700 rounded-lg"
          onClick={handleSign}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
       
        <p className="py-2 cursor-pointer" onClick={handelIsSignIn}>
          {isSignIn
            ? "Already Registered ? Sign In"
            : "New to Netflix ? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
