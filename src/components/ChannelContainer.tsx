import React, { useContext } from "react";
import ChannelContext from "../context/channelStateContext";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";
import { Channel, MessageSimple } from "stream-chat-react";
import EmptyState from "./EmptyState";
import TeamMessage from "./TeamMessage";
import ChannelInner from "./ChannelInner";
import CustomDateSeparator from "./MessageList/CustomDateSeparator";
import MessageChannelHeader from "./MessageList/MessageChannelHeader";

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
        Message={(messageProps, i) => (
          <MessageSimple key={i} {...messageProps} />
        )}
        DateSeparator={CustomDateSeparator}
        // HeaderComponent={MessageChannelHeader}
      >
        <ChannelInner />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
