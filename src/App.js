
import React, { useEffect } from 'react';
import {useState} from "react";
import Header from "./components/Header"
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path = "/" element = {<Header/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
