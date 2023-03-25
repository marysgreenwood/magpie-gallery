import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./login";
import DashboardPage from "./dashboard";
import EditProfile from "./edit-profile";
import Upload from "./upload";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PageContainer() {
  //state variable loggedIn
  const [currentPage, setCurrentPage] = useState("welcome");

  const renderPage = () => {
    if (currentPage === "welcome") {
      return <Welcome />;
    }
    if (currentPage === "login") {
      return <Login />;
    }
    if (currentPage === "dashboard") {
      return <DashboardPage />;
    }
    if (currentPage === "editProfile") {
      return <EditProfile />;
    }
    return <Upload />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />

      {renderPage()}
      {console.log(currentPage)}
      <Footer />
    </div>
  );
}
