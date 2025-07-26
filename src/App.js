import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// ✅ Use HashRouter instead of BrowserRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  const handleModeChange = (color) => {
    if (color === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#464d53ff';
      showAlert('Dark Mode has been enabled!!!', 'success');
      document.title = 'TextUtil - Dark Mode';
    } else if (color === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#56abebff';
      showAlert('Blue Mode has been enabled!!!', 'success');
      document.title = 'TextUtil - Blue Mode';
    } else if (color === 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#a1edb8ff';
      showAlert('Green Mode has been enabled!!!', 'success');
      document.title = 'TextUtil - Green Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled!!', 'success');
      document.title = 'TextUtil - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TEXTUTILS"
          mode={mode}
          handleModeChange={handleModeChange}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils- Word Counter Character Counter"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
