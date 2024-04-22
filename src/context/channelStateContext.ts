import React from "react";
import { Dispatch, SetStateAction } from "react";

interface channelStateContextType {
    createType: string;
    setCreateType: Dispatch<SetStateAction<string>>;
    isCreating: boolean;
    setIsCreating: Dispatch<SetStateAction<boolean>>;
    isEditing: boolean;
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}

const ChannelContext = React.createContext<channelStateContextType>({} as channelStateContextType);

export default ChannelContext;