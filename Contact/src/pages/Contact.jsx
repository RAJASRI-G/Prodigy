import React, { useState } from 'react';
function Contact() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddContact = () => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
    setEmail('');
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-container">
      <h1>Contact Management System</h1>
      <div className="add-contact">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
      <div className="contact-list">
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} - {contact.phoneNumber} - {contact.email}
              <button onClick={() => handleDeleteContact(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
