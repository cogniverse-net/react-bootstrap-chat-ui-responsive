// src/components/ChatContainer.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import CustomNavbar from '../CustomNavbar/CustomNavbar';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    { "text": "Hello!", "sender": 'user', "time": new Date().toLocaleTimeString() },
    { "text": "Hi there!", "sender": 'friend', "time": new Date().toLocaleTimeString() },
    { "text": "How are you?", "sender": 'user', "time": new Date().toLocaleTimeString() },
    { "text": "I'm good, thanks! And you?", "sender": 'friend', "time": new Date().toLocaleTimeString() },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', time: new Date().toLocaleTimeString() }]);
      setInput('');
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column">
      <CustomNavbar />
      <Row className="flex-grow-1 overflow-auto bg-light p-3">
        <Col>
          <MessageList messages={messages} />
        </Col>
      </Row>
      <MessageInput input={input} setInput={setInput} handleSendMessage={handleSendMessage} />
    </Container>
  );
};

export default ChatContainer;
