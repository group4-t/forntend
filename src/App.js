import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from './components/movies';


const BASE_URL = "http://localhost:4000";

function App() {

  return (
    <Movies/>
  )}

export default App;
