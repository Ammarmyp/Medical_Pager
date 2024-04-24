import React from "react";
import { useChannelStateContext } from "stream-chat-react";

const MessageChannelHeader = () => {
  const { channel } = useChannelStateContext();
  const { name, image } = channel?.data || {};
  return (
    <div
      className={`flex items-center space-x-3 border-b-2 p-3 border-b-gray-200 `}
      //   style={{ backgroundImage: `url(${image})` }}
    >
      <span className="text-3xl text-gray-500"># </span>
      <span className="font-bold lowercase">{name}</span>
    </div>
  );
};

export default MessageChannelHeader;
