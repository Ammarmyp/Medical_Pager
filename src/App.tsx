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
import Auth from "./pages/Auth";
import ChannelContainer from "./components/Channel/ChannelContainer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ChannelContext from "./context/channelStateContext";
import "./App.css";
import useAuthConnectUser from "./hooks/useAuthConnectUser";

function App() {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [theme, setTheme] = useState("light");
  const { client } = useAuthConnectUser();

  const customClasses: CustomClasses = {
    chat: " h-full",
    channel: "h-full",
  };

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
            <div className="felx flex-col ">
              {/* <Header />
              <ChannelSearch /> */}
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
