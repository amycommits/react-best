import React from 'react'
import { Link } from 'react-router-dom'
export default function App() {
  return (
    <div className="App">
      HOME
      <Link to="/form">Fill Out Form</Link>
    </div>
  );
}
