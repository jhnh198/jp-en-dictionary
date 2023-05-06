import {Routes, Route} from "react-router-dom"
import BookList from "./pages/BookList"
import Book from "./pages/Book"
import NewBook from "./pages/NewBook"
import { Booklayout } from "./BookLayout"

export function BookRoutes(){
    return (
        <>
            <Booklayout />
            <Routes>
                <Route index element={<BookList/>} />
                <Route path=":id" element={<Book/>}> </Route>
                <Route path="new" element={<NewBook/>}/>
            </Routes>
        </>
    )
}