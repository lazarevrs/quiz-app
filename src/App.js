import React from 'react';
import Quiz1 from './components/Quiz1';
import Home from './Home';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

export default function App() {
	return (
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/2tqwyud1yij2" element={<Quiz1 />} />
		<Route path="*" element={<Navigate to="/" replace />}/>
	  </Routes>
	)
  }