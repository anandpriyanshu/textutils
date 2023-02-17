import React, { useState } from 'react'   //here useState is hook


export default function Textform(props) {
    const handleUpperclick = () => {
        // console.log("Uppercase was clicked " + text);   it's for understanding purpose
        let newText = text.toUpperCase();

        setText(newText);   // changed the state from "Enter text here "to "You have clicked on the handleUpclick
        props.showAlert("Converted to Upper Case!", "success")
    }

    const handleLowererclick = () => {
        // console.log("Uppercase was clicked " + text);   it's for understanding purpose
        let newText = text.toLowerCase();
        setText(newText);   // changed the state from "Enter text here "to "You have clicked on the handleUpclick
        props.showAlert("Converted to Lower Case!", "success")
    }
    const handleClearText = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared", "success")
    }
    // const CapitalizeText = (event) => {
    //     let newText = text.toLowerCaseCase()
    //     setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    // }

    const handleOnChange = (event) => {
        // console.log("On change");          it's for understanding purpose
        setText(event.target.value);

    }

    // here text is only one state. 
    const [text, setText] = useState("");   //useState helps to create state variable
    // text = "newText"; //wrong way to change the state
    // setText = ("newText"); //correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperclick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowererclick}>Convert to Lowerercase</button>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                {/* <button className="btn btn-primary mx-1" onClick={CapitalizeText}>Capitalized Case</button> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <div style={{ color: "MediumSeaGreen" }} >

                    <h2>Your text here</h2>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} charcters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                </div>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    )
}
