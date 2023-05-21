import { useState } from 'react'
import { Link, Outlet, useSearchParams, useEffect } from 'react-router-dom'
import { Words } from "../../words/JPWordDefinitions.js"
import WordList from './WordList.jsx';
import WordCard from './WordCard.js';
import './WordPage.css';

export function WordPage(){
    const [query, setQuery] = useState('');

    const data = Words;
    const [word, setWord] = useState({});
    const keys = ['primary_meaning', 'hiragana', 'romaji', 'kanji']

   const search = (data) => {
     return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(query))
     );
    };

    const getWordFromList = (word) => {
        setWord(word);
    }
    
    return (
        <>
            
            <div className="word-page-content">                
                <div className="word-page-list">
                    <p className="search-instructions"> Search Using Kanji, Hiragana, Romaji or English Word Definitions</p>
                    <input
                        className="search"
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />           
                    <WordList getWordFromList={getWordFromList} data={search(Words)} />
                </div>

                <div className='word-main-content'>
                    <h1 className="word-page-header">Dictionary</h1>
                    <WordCard className="word-card" data={word}/>
                </div>

            </div>
            {/*<Outlet/> */}
        </>
    )
}

/*
<Link to="/books/1">Book 1 </Link>
<Link to="/books/2">Book 2 </Link>
<Link to={`/books/${text}`}>Book {text} </Link>
<Link to="/books/new">New Book </Link>
*/