

import './App.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

// import {

//   Routes,
//   Route,


// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")  //whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'Textutils- Dark Mode';
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title = 'Textutils- Light Mode';    // to change the title line after dark mode enable
    }

  }
  return (
    // use jsx fragment bcz jsx can returns only one tag <> </>
    <>

      {/* <Navbar title="TextUtils" aboutText="About us" /> */}


      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Routes>  */}
        {/* <About /> */}
        <Textform showAlert={showAlert} heading="Word counter, Character counter and Clear text" mode={mode} />
      </div>

      



    </>


  );
}

export default App;
