import { ChangeEvent, FormEvent, useState } from "react";
import signInImage from "../assets/signup.jpg";
import useAuth from "../hooks/useAuth";
import Button from "./Button";
import InputField from "./InputField";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((previousSignup) => !previousSignup);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };
  return (
    <div>
      <div className="gap-4 flex flex-col-reverse md:flex-row justify-center items-center min-h-screen bg-gray-100 ">
        <div className="max-w-md w-full bg-white rounded-md flex flex-col justify-center items-center shadow-2xl ">
          <h1 className="m-2 font-bold text-[25px]">
            {isSignup ? " Sign Up" : "Sign In"}
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col p-2">
            {isSignup && (
              <>
                <label className="m-2" htmlFor="fullName">
                  Full Name
                </label>
                <InputField
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </>
            )}
            {/* userName is common for signup and login */}
            <label className="m-2" htmlFor="userName">
              Username
            </label>
            <InputField
              type="text"
              name="userName"
              placeholder="Username"
              onChange={handleChange}
              required
            />

            {isSignup && (
              <>
                <label className="m-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <InputField
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                  pattern="\S*"
                />

                <label className="m-2" htmlFor="avatarURL">
                  Avatar URL
                </label>
                <InputField
                  name="avatarURL"
                  type="url"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  pattern="\S*"
                />
              </>
            )}

            <label className="m-2" htmlFor="password">
              Password
            </label>
            <InputField
              placeholder="Password"
              onChange={handleChange}
              type="password"
              name="password"
              required
            />
            {isSignup && (
              <>
                <label className="m-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <InputField
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  required
                />
              </>
            )}
            <div className="flex mx-2">
              <p>
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>
              <span
                className="mx-1 font-medium hover:font-bold cursor-pointer transition ease-in-out delay-150"
                onClick={switchMode}
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </div>

            <Button type="submit" className="w-[93%]">
              {isSignup ? "Sign up" : "Sign In"}
            </Button>
          </form>
        </div>
        <div>
          <img className="w-full  object-contain" src={signInImage} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
