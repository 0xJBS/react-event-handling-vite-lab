import React from 'react';

/**
 * SubmitButton Component
 * Renders a submit button and tracks mouse hover interactions.
 * Connected to: App.jsx
 */
function SubmitButton() {
  // Event handler for when mouse enters the button area
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  // Event handler for when mouse leaves the button area
  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      type="submit"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;