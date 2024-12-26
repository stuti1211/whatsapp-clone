import React, { createContext, useReducer } from "react";

// Initial state with mock data
const initialState = {
  contacts: [
    { id: 1, name: "Anmol", lastMessage: "Hey, how are you?" },
    { id: 2, name: "Rishi", lastMessage: "See you later!" },
    { id: 3, name: "Dimple", lastMessage: "Let's catch up soon." },
  ],
  messages: {
    1: [
      { id: 1, text: "Hey, how are you?", sender: "user", timestamp: "2024-12-26T10:00:00" },
      { id: 2, text: "I'm doing well! How about you?", sender: "friend", timestamp: "2024-12-26T10:05:00" },
    ],
    2: [
      { id: 1, text: "See you later!", sender: "user", timestamp: "2024-12-25T18:00:00" },
      { id: 2, text: "Take care!", sender: "friend", timestamp: "2024-12-25T18:05:00" },
    ],
    3: [
      { id: 1, text: "Let's catch up soon.", sender: "user", timestamp: "2024-12-24T14:30:00" },
      { id: 2, text: "Definitely, let's plan something.", sender: "friend", timestamp: "2024-12-24T14:35:00" },
    ],
  },
};

// Reducer function to manage actions (e.g., ADD_MESSAGE)
const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const { contactId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [contactId]: [...(state.messages[contactId] || []), message],
        },
        contacts: state.contacts.map((contact) =>
          contact.id === contactId
            ? { ...contact, lastMessage: message.text }
            : contact
        ),
      };
    default:
      return state;
  }
};

// Create AppContext and AppProvider
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
