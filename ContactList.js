import React from "react";
import "./ContactList.css"; // Contact list styling

const ContactList = ({ contacts, onSelect, selectedContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact ${selectedContact === contact.id ? "selected" : ""}`}
          onClick={() => onSelect(contact.id)}
        >
          <p>{contact.name}</p>
          <p>{contact.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
