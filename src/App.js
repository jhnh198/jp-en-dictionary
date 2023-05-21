import './App.css';
import {Routes, Route, Link, NavLink, useLocation} from 'react-router-dom'
import Home  from './pages/Home.js'
import NotFound from './pages/NotFound'
import GamesPage from './pages/Games/GamesPage';
import GrammarPage from './pages/Grammar/GrammarPage'
import LessonsPage from './pages/Lesson/LessonPage'
import { WordPage } from './pages/Word/WordPage';
import SimpleMathContainer from './pages/Games/gameModules/simpleMath/SimpleMathContainer';
import FlashCardContainer from './pages/Games/gameModules/flashCards/FlashCardContainer';

function App() {
    const location = useLocation();
  return (
    <>
    <main>
      <section className="app-main-section">
        <nav className="navbar">
            <NavLink className="navlink" to="/"> Home </NavLink>
            <NavLink className="navlink" to="/lessons"> Lessons </NavLink>
            <NavLink className="navlink" to="/words"> Words </NavLink>
            <NavLink className="navlink" to="/grammar"> Grammar </NavLink>
            <NavLink className="navlink" to="/games"> Games </NavLink>
        </nav>
        <section className='app-content-section'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lessons" element={<LessonsPage />}/>
            <Route path="/words" element={<WordPage />}/>  
            <Route path="/grammar" element={<GrammarPage />}/>
            <Route path="/games" element={<GamesPage />} >
              <Route path="/games/SimpleMath" element={<SimpleMathContainer/>} />
              <Route path="/games/FlashCards" element={<FlashCardContainer />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </section>

      </section>
    </main>
    <img src="assets/moon_and_stars.jpg" className='moon-logo'/>
    </>
  );
}

export default App;
