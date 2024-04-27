import { useContext } from "react";
import { Channel, MessageSimple } from "stream-chat-react";
import ChannelContext from "../../context/channelStateContext";
import CreateChannel from "../CreateChannel";
import EditChannel from "../EditChannel";
import CustomDateSeparator from "../MessageList/CustomDateSeparator";
import ChannelInner from "./ChannelInner";
import EmptyState from "./EmptyState";

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
    <div className="h-[100vh] ">
      <Channel
        EmptyStateIndicator={EmptyState}
        // Message={(messageProps, i) => (
        //   <MessageSimple key={i} {...messageProps} />
        // )}
        DateSeparator={CustomDateSeparator}
        // HeaderComponent={MessageChannelHeader}
      >
        <ChannelInner />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
