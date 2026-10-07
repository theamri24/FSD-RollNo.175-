import React, { useState } from "react";

function Usereactstate() {
    const [counter, setcounter] = useState(0);

    function increasevalue() {
        setcounter(counter + 5);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ color: 'green' }}>use counter state</h2>
            <h1 style={{ color: 'red' }}>counter = {counter}</h1>
            <button 
                onClick={increasevalue} 
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
                Increase Value by 5
            </button>
        </div>
    );
}

export default Usereactstate;
