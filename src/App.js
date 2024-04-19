import { useState } from "react";
import {BrowserRouter, Routes, Route}from "react-router-dom"
import Layout from "./layout";
import HomePage from "./homePage";
import About from "./about";
import Page404 from "./page404";

function App() {
 

  return <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </div>;
}

export default App;
