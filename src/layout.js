import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet會根據Router裡面點到頁面改變component */}
      <Outlet />
      <Footer/>
    </div>
  );
}
