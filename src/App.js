import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 2000);
  };

  const handleModeChange = (color) => {
    if (color === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been enabled!!!", "success");
      document.title = "TextUtil - Dark Mode";
    } else if (color === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue Mode has been enabled!!!", "success");
      document.title = "TextUtil - Blue Mode";
    } else if (color === 'green') {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Green Mode has been enabled!!!", "success");
      document.title = "TextUtil - Green Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!!", "success");
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TEXTUTILS" mode={mode} handleModeChange={handleModeChange} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Message" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
