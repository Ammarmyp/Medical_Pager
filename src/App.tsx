import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import Auth from "./components/Auth";
// import "./App.css"

const apiKey = "y4afy447uz25";
const client = StreamChat.getInstance(apiKey);

const authToken = false;

function App() {
  if ( !authToken ) return <Auth/>
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
