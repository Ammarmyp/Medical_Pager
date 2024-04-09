import { ChannelList } from "stream-chat-react";
import ChannelSearch from "./ChannelSearch";
import Header from "./Header";
import SideBar from "./SideBar";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      {/* channel-list__list_wrapper */}
      <div className=" lg:flex flex-col w-[240px] bg-[#005fff]">
        <Header />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team"  />}

          Preview={(previewProps) => (
            <TeamChannelPreview
            {...previewProps}
            type='team'
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="messaging"  />}

          Preview={(previewProps) => (
            <TeamChannelPreview
            {...previewProps}
            type='messaging'
            />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
