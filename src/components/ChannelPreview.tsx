import React, { ReactNode } from "react";
import { Channel } from "stream-chat";

interface Props {
  channel: Channel;
  type: "team";
}

const ChannelPreview = ({ channel, type }: Props) => {
  return <p># {(channel.data?.name || channel.data?.id) as ReactNode}</p>;
};

export default ChannelPreview;
