import React from "react";
import "./Message.css"; // Message styling

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === "user" ? "outgoing" : "incoming"}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
