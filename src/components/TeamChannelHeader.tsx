import React, { useContext } from "react";
import ChannelContext from "../context/channelStateContext";
import { useChannelStateContext, useChatContext } from "stream-chat-react";

const TeamChannelHeader = () => {
  const { setIsEditing } = useContext(ChannelContext);
  const { channel, watchers } = useChannelStateContext();
  const { client } = useChatContext();
  return <div>TeamChannelHeader</div>;
};

export default TeamChannelHeader;
