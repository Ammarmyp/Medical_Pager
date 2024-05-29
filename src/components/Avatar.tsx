import React from "react";
import { Avatar } from "stream-chat-react";
import doctorBoss from "../assets/doctorBoss.jpg";
const CustomAvatar = () => {
  return <Avatar name="Paamy" image={doctorBoss} shape="circle" size={40} />;
};

export default CustomAvatar;
