import Cookies from "universal-cookie";


const cookies = new Cookies();

const useLogOut = () => {
    
    const logOut = () => {
        cookies.remove("userName");
        cookies.remove("fullName");
        cookies.remove("userId");
        cookies.remove("phoneNumber");
        cookies.remove("avatarURL");
        cookies.remove("hashedPassword");
        cookies.remove("userToken");
    
        window.location.reload();
      };

      return logOut;
};

export default useLogOut;

