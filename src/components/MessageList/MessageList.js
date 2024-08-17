// src/components/MessageList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MessageList = ({ messages }) => {
  return (
    <ListGroup variant="flush">
      {messages.map((message, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
          <div>
            <strong>{message.sender}</strong>: {message.text}
          </div>
          <small className="text-muted">{message.time}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessageList;
