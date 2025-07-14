import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${
      props.mode === 'light' ? 'navbar-light bg-light' :
      props.mode === 'dark' ? 'navbar-dark bg-dark' :
      'navbar-dark' /* fallback */
    }`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          <div className="d-flex">
            {/* Dark/Grey Switch */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
              <input className="form-check-input" onClick={() => props.handleModeChange('dark')} type="checkbox" id="switchCheckGrey" checked={props.mode === 'dark'} />
              <label className="form-check-label" htmlFor="switchCheckGrey">Grey</label>
            </div>

            {/* Blue Switch */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
              <input className="form-check-input" onClick={() => props.handleModeChange('blue')} type="checkbox" id="switchCheckBlue" checked={props.mode === 'blue'} />
              <label className="form-check-label" htmlFor="switchCheckBlue">Blue</label>
            </div>

            {/* Green Switch */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={() => props.handleModeChange('green')} type="checkbox" id="switchCheckGreen" checked={props.mode === 'green'} />
              <label className="form-check-label" htmlFor="switchCheckGreen">Green</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
