import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./MessageInput.css";

const MessageInput = ({ value, onChange, onSend }) => {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleEmojiClick = (emoji) => {
    onChange({ target: { value: value + emoji.emoji } });
  };

  return (
    <div className="message-input">
      <button
        className="emoji-btn"
        onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
      >
        😀
      </button>
      {emojiPickerVisible && (
        <div className="emoji-picker">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type a message..."
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
};

export default MessageInput;
