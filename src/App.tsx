import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthProvider, LoginForm } from "@ernst1202/auth-sdk"

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LoginForm />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
