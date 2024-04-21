import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import Auth from "./components/Auth";
import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import "./App.css"

const cookies = new Cookies();
const apiKey = "y4afy447uz25";
const client = StreamChat.getInstance(apiKey);

const authToken = cookies.get("userToken");
const full = cookies.get("fullName");
console.log(full);
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
console.log(cookies.get("userId"));
console.log(authToken);

function App() {
  const [isLogged, setIsLogged] = useState(false);
  if (!authToken) return <Auth />;
  return (
    //add box shadow on this div
    <>
      <div className="flex flex-1 h-[100vh] ">
        <Chat client={client} theme="team light">
          <ChannelListContainer />
          <ChannelContainer />
        </Chat>
      </div>
    </>
  );
}

export default App;
