import { ChannelList } from "stream-chat-react";
import ChannelSearch from "./ChannelSearch";
import Header from "./Header";
import SideBar from "./SideBar";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ChannelListContainer = () => {
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
  return (
    <>
      <SideBar logOut={logOut} />
      <div className=" lg:flex flex-col w-[240px] bg-[#005fff]">
        <Header />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
