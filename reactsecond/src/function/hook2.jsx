import React,{ useState } from 'react';
export default function Hook2Example() {
    const [user, setUser] = useState({
        name : "guest",
        age : 25,
        ce: true,
        city : "surat",

    });

    const handleNameChange = (e) => {
        setUser({ ...user, name: e.target.value })
    };


    return(
        <>
        <input type="text" 
        placeholder='name'
        value={user.name}
        onChange={handleNameChange}
        />
        <br/>

        <input type="number" 
        placeholder='Age'
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <br/>

        <input type="checkbox" 
        value={user.ce}
        onChange={(e) => setUser({ ...user, ce: e.target.value })}
        />
        <br/>



        <input type="text" 
        placeholder='city'
        value={user.city}
        onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <br/>

        <h1>name is {user.name}</h1>
        <h1>age is {user.age}</h1>
        <h1>city is {user.city}</h1>
        <h1>and value is {user.ce}</h1>

        </>
    );
}