import React from "react";
import ImageArray from "../components/image-array";

function DashboardPage() {
  return (
    <div>
      <div class="container row">
        <h1>Welcome to your Dashboard</h1>
      </div>
      
      <div class="container row">
      <ImageArray />
      </div>
     
    </div>
  );
}
export default DashboardPage;
 
{/* <div id="dashboard-menu">
        <ul>
          <li class="spaceleft">
            <a href="#edit-profile">Edit Profile</a>
          </li>
        </ul>
      </div> */}