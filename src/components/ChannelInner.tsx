import React, { useState } from "react";
import { Thread, Window } from "stream-chat-react";
import {
  useChannelActionContext,
  MessageList,
  MessageInput,
} from "stream-chat-react";
import GiphyContext from "../context/gyphyContext";
import TeamChannelHeader from "./TeamChannelHeader";
import MessageChannelHeader from "./MessageList/MessageChannelHeader";

const ChannelInner = () => {
  const [giphyState, setGiphyState] = useState(false);
  const { sendMessage } = useChannelActionContext();

  const overrideSubmitHandler = (message) => {
    let updatedMessage = {
      attachments: message.attachments,
      mentioned_users: message.mentioned_users,
      parent_id: message.parent?.id,
      parent: message.parent,
      text: message.text,
    };

    if (giphyState) {
      updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
    }

    if (sendMessage) {
      sendMessage(updatedMessage);
      setGiphyState(false);
    }
  };

  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      <Window>
        <MessageChannelHeader />
        <MessageList />
        <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
      </Window>
      <Thread />
    </GiphyContext.Provider>
  );
};

export default ChannelInner;
