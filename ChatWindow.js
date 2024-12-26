import React, { useState, useEffect } from "react";
import MessageInput from "./MessageInput";
import Message from "./Message";
import "./ChatWindow.css";

const ChatWindow = ({ messages, onSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (messageText) {
      setIsTyping(true);
      const timeout = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [messageText]);

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText(""); // Clear message input
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-history">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isTyping && <div className="typing-indicator">Friend is typing...</div>}
      </div>
      <MessageInput
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatWindow;
