import React, { useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";

const SignIn = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full bg-white rounded-md flex flex-col justify-center items-center shadow-2xl ">
        <h1 className="m-2 font-bold text-[25px]">Sign Up</h1>
        <form className="w-full flex flex-col ">
          <label className="m-2" htmlFor="userName">
            User Name
          </label>
          <InputField
            type="text"
            id="userName"
            required
            ref={userNameRef}
            pattern="\S*"
          />
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <InputField
            type="password"
            id="password"
            required
            ref={passwordRef}
          />
          <Button type="submit" className="w-[full]">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
