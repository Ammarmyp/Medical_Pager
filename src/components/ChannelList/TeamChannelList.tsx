import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  error: Error;
  loading: boolean;
  type: string;
}

const TeamChannelList = ({ children, error, loading, type }: Props) => {
  if (error) {
    return type === "team" ? (
      <div>
        <p>Connection Error, Please wait a moment and try again.</p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div>
        <p>{type === "team" ? "Channels " : "messages "} loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>{type === "team" ? "Channels" : "Direct messages"} </p>
        {/* button for adding a channel */}
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
