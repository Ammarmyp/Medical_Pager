import { useState } from "react";
import { StreamChat } from "stream-chat";
import {
  ChannelList,
  ChannelSearch,
  Chat,
  CustomClasses,
} from "stream-chat-react";
import Cookies from "universal-cookie";
import "../node_modules/stream-chat-react/dist/css/index.css";
import Auth from "./components/Auth";
import ChannelContainer from "./components/Channel/ChannelContainer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ChannelContext from "./context/channelStateContext";
import "./App.css";

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
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [theme, setTheme] = useState("light-dark");

  const customClasses: CustomClasses = {
    chat: " h-full",
    channel: "h-full",
  };

  if (!authToken) return <Auth />;
  return (
    //add box shadow on this div
    <>
      <ChannelContext.Provider
        value={{
          createType,
          setCreateType,
          isCreating,
          setIsCreating,
          isEditing,
          setIsEditing,
        }}
      >
        <div className="flex flex-1  ">
          <Chat
            client={client}
            theme={`team ${theme}`}
            // customClasses={customClasses}
          >
            {/* <ChannelListContainer /> */}
            <SideBar />
            <div className="felx flex-col ">
              <Header />
              <ChannelSearch />
              <div className="w-[25%]">
                <ChannelList />
              </div>
            </div>
            <div className="w-full ">
              <ChannelContainer />
            </div>
          </Chat>
        </div>
        {/* <div className="bg-red-600 h-10 w-full"></div> */}
      </ChannelContext.Provider>
    </>
  );
}

export default App;
