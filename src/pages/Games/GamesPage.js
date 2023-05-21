import GamesList from "./GamesList"
import { Outlet } from "react-router-dom";

export default function GamesPage(){

    return (
        <div className="games-page-container">
            <GamesList />
            <Outlet/>
        </div>
    )
}