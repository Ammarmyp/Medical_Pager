import { FormEvent, useRef, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  //Todo find a way to use password
  const { signUp } = useAuth();

  const userNameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const imageURLRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (signUp.isPending)
      return (
        <h1 className="w-full h-full items-center m-auto">Signing UP...</h1>
      );

    const userName = userNameRef.current?.value;
    const name = nameRef.current?.value;
    const imageUrl = imageURLRef.current?.value;
    const password = passwordRef.current?.value;
   
    if (!userName || !name || !password) return;

    signUp.mutate({ id: userName, name, image: imageUrl, password });
  };

  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full bg-white rounded-md flex flex-col justify-center items-center shadow-2xl ">
        <h1 className="m-2 font-bold text-[25px]">Sign Up</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col p-2">
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
          <label className="m-2" htmlFor="name">
            Name
          </label>
          <InputField type="text" id="name" required ref={nameRef} />
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <InputField
            type="password"
            id="password"
            required
            ref={passwordRef}
          />
          <label className="m-2" htmlFor="imageURL">
            Image URL
          </label>
          <InputField type="URL" id="imageURL" ref={imageURLRef} />
          <Button disabled={signUp.isPending} type="submit" className="w-[93%]">
            {signUp.isPending ? "Signing up" : " Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
