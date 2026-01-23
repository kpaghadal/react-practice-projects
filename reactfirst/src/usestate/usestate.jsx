import React, { useState } from 'react';

export default function UseStateDemo () {
const [arr1, setArr1] = useState([10,20,30,40,50]);
const [val1, setVal1] = useState(0);
const [val2, setVal2] = useState(0);

const addElement = (v1) => {
    setArr1([...arr1, v1]);
};

const removeElement = (v1) => {
    setArr1(arr1.filter((x) => x !== v1));
};

const updateElement = (k1, v1) => {
    setArr1(arr1.map((x) => x === k1 ? v1 : x));
};

return (
    <>
    <h1>array element are: {arr1}</h1>
    <br/>

    <input
        type="number"
        onChange={(e) => setVal1(parseInt(e.target.value))}
        placeholder="enter value to add "
    />

    <br/><br/>

    <input
        type="number"
        onChange={(e) => setVal2(parseInt(e.target.value))}
        placeholder="enter value to remove"
    />

    <br/><br/>

    <button onClick={() => addElement(val1)}>Add</button>
    <button onClick={() => removeElement(val2)}>remove</button>
    <button onClick={() => updateElement(val1, val2)}>update</button>
    </>
);
}
