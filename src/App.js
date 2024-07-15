import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactTable';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://www.raydelto.org/agenda.php')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const addContact = (newContact) => {
    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then(response => response.json())
      .then(data => {
        setContacts([...contacts, data]);
      })
      .catch(error => console.error('Error adding contact:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-center">Agenda React</h1>
         <div class="container-fluid row">
           <ContactForm addContact={addContact} />
           <ContactList contacts={contacts} />
         </div>
      </header>
    </div>
  );
};

export default App;