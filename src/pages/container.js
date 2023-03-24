import React, { useState } from "react";
import Welcome from "./welcome";
import Login from "./login";
import Dashboard from "./dashboard";
import Header from "../components/header";
import Footer from "../components/footer.js";

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
    
    return <Dashboard />;
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