import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleUpClick = () => {
    if (text.trim().length === 0) return;
    setHistory((prev) => [...prev, text]);
    let newText = text.toUpperCase();
    setText(newText);
    setRedoStack([]);
    props.showAlert('Converted to UPPERCASE', 'success');
  };

  const handleUpClick1 = () => {
    if (text.trim().length === 0) return;
    setHistory((prev) => [...prev, text]);
    let newText = text.toLowerCase();
    setText(newText);
    setRedoStack([]);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleUpRedoClick = () => {
    if (history.length === 0) return;
    const previousText = history[history.length - 1];
    setRedoStack((prev) => [...prev, text]);
    setText(previousText);
    setHistory(history.slice(0, -1));
    props.showAlert('Text redone', 'success');
  };

  const handleUpundoClick = () => {
    if (redoStack.length > 0) {
      const lastRedo = redoStack[redoStack.length - 1];
      setHistory((prev) => [...prev, text]);
      setText(lastRedo);
      setRedoStack(redoStack.slice(0, -1));
      props.showAlert('Text undone', 'success');
    }
  };

  const handleOnChange = (event) => {
    setHistory((prev) => [...prev, text]);
    setText(event.target.value);
    setRedoStack([]);
  };

  const handleRemoveExtraSpaces = () => {
    if (text.trim().length === 0) return;
    setHistory((prev) => [...prev, text]);
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    setRedoStack([]);
    props.showAlert('Extra spaces removed', 'success');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard', 'success');
  };

  const handleClearText = () => {
    if (text.trim().length === 0) return;
    setHistory((prev) => [...prev, text]);
    setText('');
    setRedoStack([]);
    props.showAlert('Text cleared', 'success');
  };

  const getButtonStyle = () => {
    switch (props.mode) {
      case 'dark':
        return {
          backgroundColor: '#4a4a4a',
          color: 'white',
          border: '1px solid white',
        };
      case 'blue':
        return {
          backgroundColor: '#007bff',
          color: 'white',
          border: '1px solid #0056b3',
        };
      case 'green':
        return {
          backgroundColor: '#28a745',
          color: 'white',
          border: '1px solid #1e7e34',
        };
      default:
        return {
          backgroundColor: '#0d6efd',
          color: 'white',
          border: '1px solid #0d6efd',
        };
    }
  };

  const getTextareaStyle = () => {
    switch (props.mode) {
      case 'dark':
        return {
          backgroundColor: '#626262ff',
          color: 'white',
          border: '1px solid white',
        };
      case 'blue':
        return {
          backgroundColor: '#cfe2ff',
          color: '#084298',
          border: '1px solid #084298',
        };
      case 'green':
        return {
          backgroundColor: '#d3f9d8',
          color: '#2f6627',
          border: '1px solid #2f6627',
        };
      default:
        return {
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid #ced4da',
        };
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={getTextareaStyle()}
            id="myBox"
            rows="8"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleUpClick}
        >
          Convert To UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleUpClick1}
        >
          Convert To lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleUpRedoClick}
        >
          Redo Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleUpundoClick}
        >
          Undo Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          style={getButtonStyle()}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
          and {text.length} characters
        </p>
        <p>
          {0.008 *
            (text.trim().length === 0
              ? 0
              : text.trim().split(/\s+/).length)}{' '}
          Minutes Read
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
