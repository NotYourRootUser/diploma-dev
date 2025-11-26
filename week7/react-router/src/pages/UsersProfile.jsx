import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // grab dynamic URL parameter

  return (
    <div>
      <h1>User Profile</h1>

      <p>
        We can get the parameter ID from the URL: <strong>{id}</strong>
      </p>

      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}
