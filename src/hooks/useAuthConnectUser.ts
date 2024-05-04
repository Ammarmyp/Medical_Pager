import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";


const useAuthConnectUser = () => {
    const cookies = new Cookies();
    const apiKey = "y4afy447uz25";
    const client = StreamChat.getInstance(apiKey);
    
    const authToken = cookies.get("userToken");
    useEffect( () => {
if (authToken) {
  client.connectUser(
    {
      name: cookies.get("userName"),
      fullName: cookies.get("fullName"),
      id: cookies.get("userId"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    authToken
  );
}
console.log(authToken);
    },[ authToken]);

    return { client, authToken }
};

export default useAuthConnectUser;