import React, { useState, useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import "./styles/App.css"; 


const App = () => {
  const { state, dispatch } = useContext(AppContext); 
  const [selectedContact, setSelectedContact] = useState(null); 

  
  const handleSelectContact = (id) => {
    setSelectedContact(id);
  };

  // Handler for sending a message
  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      sender: "user",
    };

    // Update the local state (dispatch an action to update global state)
    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        contactId: selectedContact,
        message: newMessage,
      },
    });

    
    console.log(`Sending message to contact ${selectedContact}:`, text);
  };

  return (
    <AppProvider>
      <div className="app">
        <div className="contact-list">
          <ContactList
            contacts={state.contacts}
            onSelect={handleSelectContact}
            selectedContact={selectedContact}
          />
        </div>
        <div className="chat-window">
          {selectedContact ? (
            <ChatWindow
              messages={state.messages[selectedContact] || []}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="placeholder">
              Select a contact to start chatting.
            </div>
          )}
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
