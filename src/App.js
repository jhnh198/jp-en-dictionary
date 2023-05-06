import './App.css';
import {Routes, Route, Link, NavLink, useLocation} from 'react-router-dom'
import Home  from './pages/Home.js'
import NotFound from './pages/NotFound'
import GamesPage from './pages/Games/GamesPage';
import GrammarPage from './pages/Grammar/GrammarPage'
import LessonsPage from './pages/Lessons/LessonsPage'
import { WordPage } from './pages/Word/WordPage';
import SimpleMathContainer from './pages/Games/gameModules/simpleMath/SimpleMathContainer';
import FlashCardContainer from './pages/Games/gameModules/flashCards/FlashCardContainer';

function App() {
    const location = useLocation();
  return (
    <>
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/lessons"> Lessons </NavLink>
            <NavLink to="/words"> Words </NavLink>
            <NavLink to="/grammar"> Grammar </NavLink>
            <NavLink to="/games"> Games </NavLink>
        </nav>
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
    </>
  );
}

export default App;
