import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from './menu';
import HomePage from './homepage';
import DriftPage from './driftpage';
import TimeAttackPage from './attackpage';
import ForzaPage from './forzapage';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}