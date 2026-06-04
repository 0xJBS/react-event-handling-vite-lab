import React from 'react';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

/**
 * App Component
 * Parent container that mounts the PasswordInput and SubmitButton components.
 * Tree: App -> [PasswordInput, SubmitButton]
 */
function App() {
  return (
    <div className="app-container">
      <h1>Security Verification</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <PasswordInput />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;