// src/components/MessageList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MessageList = ({ messages }) => {
  return (
    <ListGroup variant="flush">
      {messages.map((message, index) => (
        <ListGroup.Item
          key={index}
          className={`d-flex justify-content-${message.sender === 'user' ? 'end' : 'start'} `}
        >
          <div className={`message-bubble ${message.sender === 'user' ? 'sent' : 'received'}`}>
            {message.text}
            <div className="message-time">{message.time}</div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessageList;
