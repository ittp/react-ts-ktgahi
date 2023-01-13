import * as React from 'react';
import './style.css';
import * as vnc from 'react-vnc-display';

export default function App() {
  console.log(vnc);

  let url = localStorage.setItem('url', 'localhost:5900');

  console.log(localStorage.url);

  return (
    <div id="card">
      <div className="title">Hello StackBlitz!</div>

      <div className="description">
        Start editing to see some magic happen :)
      </div>
    </div>
  );
}
