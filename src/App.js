import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <div className="container my-3">
     <Routes>
     <Route exact path="/about" element={<About />}>
     </Route>
     <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
     </Route>
     </Routes>
     </div>
    </Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;