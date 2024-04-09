import { Channel } from "stream-chat";
import ChannelPreview from "./ChannelPreview";
import DirectPreview from "./DirectPreview";

interface Props {
  channel: Channel;
  type: "team" | "messaging";
}

const TeamChannelPreview = ({ channel, type }: Props) => {
  return (
    <div>
      {type === "team" ? (
        <ChannelPreview channel={channel} type="team" />
      ) : (
        <DirectPreview channel={channel} type="messaging" />
      )}
    </div>
  );
};

export default TeamChannelPreview;
