import './App.css'
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/Curriculum';
import NotFoundPage from './pages/404';

export default function App() {
  const path = window.location.pathname;

  if (path === '/') {
    return <HomePage />;
  }
  
  if (path.startsWith('/portfolio')) {
    return <CurriculumPage />;
  }

  return <NotFoundPage />;
}
