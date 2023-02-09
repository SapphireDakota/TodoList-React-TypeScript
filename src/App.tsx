import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { TodosPage } from "./pages/TodosPage/TodosPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodosPage/>} path='/' index />
          <Route element={<AboutPage/>} path='/about' />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
