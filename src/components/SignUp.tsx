import Button from "./Button";
import InputField from "./InputField";

const SignUp = () => {
  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-gray-100 ">
      <div className="max-w-md w-full bg-white rounded-md flex flex-col justify-center items-center ">
        <h1 className="m-2 font-bold text-[19px]">Sign Up</h1>
        <form className="w-full m-2">
          <label className="m-2" htmlFor="userName">
            User Name
          </label>
          <InputField type="text" id="userName" required />
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <InputField type="password" id="password" required />
          <label className="m-2" htmlFor="imageURL">
            Image URL
          </label>
          <InputField type="text" id="imageURL" />
          <Button> Sign in </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
