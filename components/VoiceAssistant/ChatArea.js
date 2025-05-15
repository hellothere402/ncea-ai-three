import React from 'react';
import MessageBubble from './MessageBubble';

const ChatArea = ({ messages, messagesEndRef }) => {
  return (
    <div className="chat-area">
      <div className="messages-container">
        {messages.map((message, index) => (
          <MessageBubble 
            key={index}
            message={message}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;