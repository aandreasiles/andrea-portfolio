import './App.css'
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/Curriculum';
import NotFoundPage from './pages/404';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<CurriculumPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
