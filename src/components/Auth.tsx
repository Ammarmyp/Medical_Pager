import { ChangeEvent, FormEvent, useState } from "react";
import signInImage from "../assets/signup.jpg";
import doctorImage from "../assets/doctorBoss.jpg";
import useAuth from "../hooks/useAuth";
import Button from "./Button";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const initialState = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const mutation = useAuth(isSignup);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((previousSignup) => !previousSignup);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const inputFieldCustomDesign = "bg-[#1C5D7B] border-0 border-b-2";

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#1C5D7B] gap-3 px-4">
      <div className="hidden md:block md:w-1/2 h-[600px]">
        <img
          className="w-full object-contain h-full"
          src={doctorImage}
          alt="Sign In"
        />
      </div>
      <div className="max-w-md w-full bg-[#1C5D7B] rounded-md flex flex-col justify-center items-center shadow-2xl p-8">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome </h1> */}
        <h2 className="text-3xl font-bold mb-4 ">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          {isSignup && (
            <>
              <InputField
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className={inputFieldCustomDesign}
              />
              <InputField
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                pattern="\S*"
                className={inputFieldCustomDesign}
              />
              <InputField
                name="avatarURL"
                type="url"
                placeholder="Avatar URL"
                onChange={handleChange}
                pattern="\S*"
                className={inputFieldCustomDesign}
              />
            </>
          )}

          <InputField
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleChange}
            required
            className={inputFieldCustomDesign}
          />
          <InputField
            placeholder="Password"
            onChange={handleChange}
            type="password"
            name="password"
            required
            className={inputFieldCustomDesign}
          />
          {isSignup && (
            <InputField
              placeholder="Confirm Password"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              required
              className={inputFieldCustomDesign}
            />
          )}
          <Button type="submit" className="w-full bg-slate-900">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        <div className="flex justify-center mt-4">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            className="ml-1 font-medium text-blue-500 hover:text-[#1c4f66] focus:outline-none"
            onClick={switchMode}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
