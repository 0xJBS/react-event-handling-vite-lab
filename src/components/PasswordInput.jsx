import React from 'react';

/**
 * PasswordInput Component
 * Renders a password type input field and tracks value changes.
 * Connected to: App.jsx
 */
function PasswordInput() {
  // Event handler function for input changes
  const handleChange = (event) => {
    // Changed from "Entering password…" to "Entering password..."
    console.log("Entering password..."); 
  };

  return (
    <div className="password-input-container">
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
    </div>
  );
}

export default PasswordInput;