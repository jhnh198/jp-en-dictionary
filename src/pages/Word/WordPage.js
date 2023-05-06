import { useState } from 'react'
import { Link, Outlet, useSearchParams, useEffect } from 'react-router-dom'
import { Words } from "../../words/JPWordDefinitions.js"
import WordList from './WordList.jsx';
import WordCard from './WordCard.js';

// add onclick
// pass params to wordcard.js and put on screen in card
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

    //keys.some((key) => item[key].toLowerCase(locales).includes(query))

    /*

           item.primary_meaning.toLowerCase().includes(query) ||
       item.jp.word.includes(query) ||
       item.jp.romaji.toLowerCase().includes(query) ||
       item.jp.kanji.includes(query)
    
    useEffect(() => {
        const fetchData = (data) => {
            return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
         );
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);*/
    
    return (
        <>
           <input
               className="search"
               placeholder="Search..."
               onChange={(e) => setQuery(e.target.value)}
           />
            <WordList getWordFromList={getWordFromList} data={search(Words)} />
            <WordCard data={word}/>

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