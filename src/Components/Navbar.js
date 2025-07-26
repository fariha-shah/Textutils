import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
          </ul>

          {/* Toggle Mode Options (Radio Buttons) */}
          <div className="d-flex text-light">

            <div className="form-check mx-2">
              <input className="form-check-input"
                type="radio"
                name="modeToggle"
                id="darkMode"
                checked={props.mode === 'dark'}
                onChange={() => props.handleModeChange('dark')}
              />
              <label className="form-check-label" htmlFor="darkMode">
                Dark
              </label>
            </div>

            <div className="form-check mx-2">
              <input className="form-check-input"
                type="radio"
                name="modeToggle"
                id="blueMode"
                checked={props.mode === 'blue'}
                onChange={() => props.handleModeChange('blue')}
              />
              <label className="form-check-label" htmlFor="blueMode">
                Blue
              </label>
            </div>

            <div className="form-check mx-2">
              <input className="form-check-input"
                type="radio"
                name="modeToggle"
                id="greenMode"
                checked={props.mode === 'green'}
                onChange={() => props.handleModeChange('green')}
              />
              <label className="form-check-label" htmlFor="greenMode">
                Green
              </label>
            </div>

            <div className="form-check mx-2">
              <input className="form-check-input"
                type="radio"
                name="modeToggle"
                id="lightMode"
                checked={props.mode === 'light'}
                onChange={() => props.handleModeChange('light')}
              />
              <label className="form-check-label" htmlFor="lightMode">
                Light
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
