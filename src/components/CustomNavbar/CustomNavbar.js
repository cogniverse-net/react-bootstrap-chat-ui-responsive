// src/components/CustomNavbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Navbar.Brand href="#">ChatApp</Navbar.Brand>
      <Nav className="ml-auto">
        <Dropdown show={showDropdown} onToggle={toggleDropdown}>
          <Dropdown.Toggle as="div" id="dropdown-custom-components" className="nav-link">
            <FaBars size={24} />
          </Dropdown.Toggle>
          <Dropdown.Menu align="right">
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;