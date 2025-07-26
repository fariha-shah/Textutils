import React from 'react';

export default function About(props) {
  const mystyle = {
    backgroundColor:
      props.mode === 'dark'
        ? '#042743'
        : props.mode === 'blue'
        ? '#d0ebff'
        : props.mode === 'green'
        ? '#d3f9d8'
        : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About TextUtils</h2>

      <p style={mystyle}>
        <strong>TextUtils</strong> is a lightweight and easy-to-use web application designed to help you analyze and manipulate your text quickly and efficiently. Whether you want to convert text to uppercase, lowercase, remove extra spaces, or count words and characters — TextUtils has you covered!
      </p>
      <p style={mystyle}>
        This tool is built with <strong>React</strong> and styled using <strong>Bootstrap</strong> to ensure a smooth and responsive user experience.
      </p>
      <p style={mystyle}>
        It's perfect for students, writers, and developers who want a quick way to manage and clean up their text content.
      </p>
    </div>
  );
}
