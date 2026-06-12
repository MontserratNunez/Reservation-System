import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <br></br>
      <h2>Page not found</h2>
      <p>The route does not exist.</p>

      <Link to="/" style={styles.link}>
        Back to home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "96px",
  },
  link: {
    marginTop: "20px",
    textDecoration: "none",
    color: "#1976d2",
    fontWeight: "bold",
  },
};

export default NotFound;
