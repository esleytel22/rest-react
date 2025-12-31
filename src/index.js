import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';




//ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));

/*
function App() {
  return (
    <h2>hello world</h2>
  )
}
*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
