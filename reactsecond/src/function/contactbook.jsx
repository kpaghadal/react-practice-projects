import React, { useState } from 'react';

export default function ContactBook1() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const addContact = () => {
        const newContact = { name, phone, email };
        setContacts([...contacts, newContact]);
        setName('');
        setPhone('');
        setEmail('');
    };

    
    return (
        <div>
            <h1>Contact Book</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <br/>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <button onClick={addContact}>Add Contact</button>
          
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name} / {contact.phone} / {contact.email}
                    </li>
                ))}
            </ul>

            
        </div>
    );
}