import { NavLink} from "react-router-dom";
import './Games.css'

export default function GamesList(){
    return (
        <div className="games-list-container">
            <h1 className="games-list-header">Games for Learning and Practicing Japanese</h1>
            <NavLink className='game-link' to="/games/SimpleMath"> Simple Math </NavLink>
            <NavLink className='game-link' to="/games/FlashCards"> Flash Cards </NavLink>
        </div>
    )
}