import React, { useState } from 'react';
import Mylogo from './component/Mylogo';
import styles from './styles';

const App = () => {
  const [isSubmitHovered, setSubmitHovered] = useState(false);
  const [isGoogleHovered, setGoogleHovered] = useState(false);
  const [isFacebookHovered, setFacebookHovered] = useState(false);

  return (
    <div className="form-container" style={styles.container}>
      <form style={styles.form}>
        <Mylogo />
        <h2 style={styles.header}>Sign up</h2>

        <label style={styles.label}>Full name</label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="your@email.com" style={styles.input} />

        <label style={styles.label}>Password</label>
        <input type="password" placeholder="Enter your password" style={styles.input} />

        <label style={styles.label}>School UID</label>
        <input type="text" placeholder="Enter your school ID" style={styles.input} />

        <div style={styles.checkboxContainer}>
          <input type="checkbox" id="updates" style={styles.checkbox} />
          <label htmlFor="updates">I want to receive updates via email.</label>
        </div>

        <button
          type="submit"
          style={isSubmitHovered ? { ...styles.submitButton, ...styles.submitButtonHover } : styles.submitButton}
          onMouseEnter={() => setSubmitHovered(true)}
          onMouseLeave={() => setSubmitHovered(false)}
        >
          Sign up
        </button>

        <p style={styles.signInText}>
          Already have an account? <a href="/">Sign in</a>
        </p>

        <p style={styles.or}>or</p>

        <button
          style={isGoogleHovered ? { ...styles.googleButton, ...styles.googleButtonHover } : styles.googleButton}
          onMouseEnter={() => setGoogleHovered(true)}
          onMouseLeave={() => setGoogleHovered(false)}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            style={styles.icon}
          />
          Sign up with Google
        </button>

        <button
          style={isFacebookHovered ? { ...styles.facebookButton, ...styles.facebookButtonHover } : styles.facebookButton}
          onMouseEnter={() => setFacebookHovered(true)}
          onMouseLeave={() => setFacebookHovered(false)}
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
            style={styles.icon}
          />
          Sign up with Facebook
        </button>
      </form>
    </div>
  );
};

export default App;
