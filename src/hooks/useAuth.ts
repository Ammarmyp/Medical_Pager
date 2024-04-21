import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "universal-cookie";

interface FormData {
    fullName?: string,
    userName: string,
    password: string,
    confirmPassword?: string,
    phoneNumber?: string,
    avatarURL?: string,
};

interface ResponseDataType {
    userToken: string;
    userId: string;
    hashedPassword: string;
    fullName: string;
    userName: string;
    phoneNumber: string;
}

const cookies = new Cookies();

const useAuth = (isSignup: boolean) =>  useMutation({
    mutationFn: (formData: FormData) => {
        const URL = "http://localhost:5000/auth";
        const endpoint = isSignup ? "signup" : "login";
        
        return axios.post<ResponseDataType>(`${URL}/${endpoint}`, formData)
            .then((res) => {
                const { userToken, userId, hashedPassword, userName, fullName, phoneNumber } = res.data;

                cookies.set("userToken", userToken);
                cookies.set("userName", userName);
                cookies.set("fullName", fullName);
                cookies.set("userId", userId);
                
                if (isSignup) {
                    cookies.set("phoneNumber", phoneNumber);
                    cookies.set("avatarURL", formData.avatarURL || ''); 
                    cookies.set("hashedPassword", hashedPassword);
                }
                window.location.reload();
                return res.data;
            })
            .catch((error) => {
                console.log(error)
            });
    },

});

export default useAuth;
