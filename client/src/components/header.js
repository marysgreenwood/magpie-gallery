import React from "react";
import NavBar from "./navbar";
import "../index.css";
//import magpieBanner from "../images/magpiegallerysplash.png";

export default function Header(props) {
  return (
    <div>
      <div >
        <h1>Magpie Gallery</h1>
        <h2>Searching for hidden gems</h2>
      </div>
      <NavBar 
      currentPage={props.currentPage}
      handlePageChange={props.handlePageChange}
      />
    </div>
  );
}

//class="splash"
