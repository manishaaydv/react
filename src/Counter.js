import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "200px",
    margin: "16px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default UserCard;
