// src/components/MessageInput.js
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const MessageInput = ({ input, setInput, handleSendMessage }) => {
  return (
    <Row className="bg-white p-3">
      <Col xs={10}>
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
      </Col>
      <Col xs={2} className="text-right">
        <Button variant="primary" onClick={handleSendMessage} block>
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default MessageInput;
