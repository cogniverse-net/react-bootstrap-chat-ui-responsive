// src/components/MessageInput.js
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const MessageInput = ({ input, setInput, handleSendMessage }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Check if Enter key is pressed without Shift key
      e.preventDefault(); // Prevent default newline in text area
      handleSendMessage();
    }
  };

  return (
    <Row className="bg-white p-3">
      <Col xs={10}>
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Updated event
        />
      </Col>
      <Col xs={2} className="text-right">
        <Button variant="primary" onClick={handleSendMessage} block="true">
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default MessageInput;
