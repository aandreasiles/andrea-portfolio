import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/Curriculum';

const App = () => (
 <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<CurriculumPage />} />
    </Routes>
  </Router>
);

export default App;
