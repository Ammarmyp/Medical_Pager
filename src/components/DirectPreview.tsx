import { Channel } from "stream-chat";
import { Avatar, useChatContext } from "stream-chat-react";

interface Props {
  channel: Channel;
  type: "messaging";
}

const DirectPreview = ({ channel, type }: Props) => {
  const { channel: activeChannel, client } = useChatContext();
  const members = Object.values(channel.state.members).filter(
    (user) => user.user_id !== client.userID
  );
  return (
    <div>
      <Avatar
        name={members[0].user?.username}
        image={members[0].user?.name}
        size={24}
      />
      <p>{members[0].user?.name}</p>
    </div>
  );
};

export default DirectPreview;
