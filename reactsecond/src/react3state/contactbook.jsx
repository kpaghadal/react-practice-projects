import React, { Component } from 'react';

class ContactBook extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], fname: "", lname: "", phone: "" };
    }

    handleFnameChange = (e) => {
        this.setState({ fname: e.target.value });
    };

    handleLnameChange = (e) => {
        this.setState({ lname: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    addtoContact = () => {
        if (
            this.state.fname.trim() === "" ||
            this.state.lname.trim() === "" ||
            this.state.phone.trim() === ""
        )
            return;

        const newcontact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
        };

        this.setState((prevState) => ({
            contacts: [newcontact, ...prevState.contacts],
            fname: "",
            lname: "",
            phone: "",
        }));
    };

    deletecontact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id),
        }));
    };

    toggleDisplay = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) => 
            y.id === id ? {...y, visible: !y.visible} : y
        ),
        }));
    };




    render() {
        const { contacts, fname, lname, phone } = this.state;
        return (
            <>
                <input type="text" value={fname} placeholder="first name" onChange={this.handleFnameChange} /><br />
                <input type="text" value={lname} placeholder="last name" onChange={this.handleLnameChange} /><br />
                <input type="text" value={phone} placeholder="mobile number" onChange={this.handlePhoneChange} /><br />
                <button onClick={this.addtoContact}>Add Contact</button><br />

                <ul>
                    {contacts.map((y) => (
                        <li key={y.id}>
                            {y.fname}
                            <button onClick={() => this.toggleDisplay(y.id)}>view</button>
                            <button onClick={() => this.deletecontact(y.id)}>delete</button>
                            <div style={{ display: y.visible ? "" : "none" }}>
                                {y.lname} {"-"} {y.phone}
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ContactBook;
