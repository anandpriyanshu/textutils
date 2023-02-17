import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtntext] = useState("Enable Dark mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {

            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtntext("Enable Light mode")
        }
        else {

            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark mode")

        }
    }


    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Analyze your text</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>It can be use freely </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is compatible</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
