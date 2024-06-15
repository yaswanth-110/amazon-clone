import React from "react";
import "./AdminPage.css";

function AdminPage() {
  const submithandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="admin_page">
      <form className="admin_form" onSubmit={submithandle}>
        <h5>Email</h5>
        <input type="email" placeholder="Email" />
        <h5>Password</h5>
        <input type="password" placeholder="password" />
        <button className="admin_button">Sign In</button>
      </form>
    </div>
  );
}

export default AdminPage;
