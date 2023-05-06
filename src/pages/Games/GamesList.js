import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom";
import SimpleMathContainer from "./gameModules/simpleMath/SimpleMathContainer";

export default function GamesList(){
    const [games, setGames] = useState([]);
    const [game, setGame] = useState('');


    return (
        <>
            <h1>Games List</h1>
            <NavLink to="/games/SimpleMath"> Simple Math </NavLink>
            <NavLink to="/games/FlashCards"> Flash Cards </NavLink>
            <Outlet />
        </>
    )
}