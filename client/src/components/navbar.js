import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#welcome"
          onClick={() => handlePageChange("welcome")}
          className={currentPage === "" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("login")}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === "login" ? "nav-link active" : "nav-link"}
        >
          Log in
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange("dashboard")}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === "dashboard" ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#editProfile"
          onClick={() => handlePageChange("editProfile")}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === "editProfile" ? "nav-link active" : "nav-link"
          }
        >
          Edit Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#upload"
          onClick={() => handlePageChange("upload")}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === "upload" ? "nav-link active" : "nav-link"
          }
        >
          Upload
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
