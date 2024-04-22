import React, { useContext } from "react";
import ChannelContext from "../context/channelStateContext";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";
import { Channel } from "stream-chat-react";
import EmptyState from "./EmptyState";
import TeamMessage from "./TeamMessage";
import ChannelInner from "./ChannelInner";

const ChannelContainer = () => {
  const { isCreating, isEditing } = useContext(ChannelContext);

  if (isCreating)
    return (
      <div>
        <CreateChannel />
      </div>
    );

  if (isEditing)
    return (
      <div>
        <EditChannel />
      </div>
    );

  return (
    <div>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
      >
        <ChannelInner />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
