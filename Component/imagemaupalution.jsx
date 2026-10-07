import React, { useState } from 'react';
import pic from '../cat.png';

function Imagemanipulation() {

    const [catHeight, setCatHeight] = useState(200);
    const [catWidth, setCatWidth] = useState(200);

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function enhanceHeight() {
        setCatHeight(catHeight + 10);
    }

    function enhanceWidth() {
        setCatWidth(catWidth + 10);
    }

    function changeBackground() {
        setRed((Math.random() * 256));
        setGreen((Math.random() * 256));
        setBlue((Math.random() * 256));
    }

    return (
        <div style={{textAlign: 'center'}}>

            <h1 style={{ color: 'red' }}>
                Image Manipulation
            </h1>

            <div style={{
                border: '2px solid black',
                height: '400px',
                width: '400px',
                margin: 'auto',
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}>

                <img src={pic}height={catHeight}width={catWidth}/>

            </div>

            <div style={{marginTop: '20px'}}>

                <button
                    onClick={enhanceHeight}>Enhance Height</button>

                <button
                    onClick={enhanceWidth}>Enhance Width</button>

                <button
                    onClick={changeBackground}>Change Background</button>

            </div>

        </div>
    );
}

export default Imagemanipulation;