import React, { useContext } from "react";
import {
  Avatar,
  useChannelStateContext,
  useChatContext,
} from "stream-chat-react";
import ChannelContext from "../context/channelStateContext";

const MessagingHeader = () => {
  const { channel, watchers } = useChannelStateContext();
  const { client } = useChatContext();
  const { setIsEditing } = useContext(ChannelContext);
  const members = Object.values(channel.state.members).filter(
    (user) => user.user_id !== client.userID
  );
  const additionalMembers = members.length - 3;

  if (channel.type === "messaging") {
    return (
      <div>
        {members.map(({ user }, i) => (
          <div key={i}>
            <Avatar image={user?.image} name={user?.name} size={32} />
          </div>
        ))}
        {additionalMembers > 0 && <p>and {additionalMembers} more</p>}
      </div>
    );
  }

  return (
    <div>
      <p># {channel.data?.name}</p>
      <span onClick={() => setIsEditing(true)}>{/* <ChannelInfo/> */}</span>
    </div>
  );
};

export default MessagingHeader;
