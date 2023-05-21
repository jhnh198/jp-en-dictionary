//shows a word in english and user responds with correct hiragana, romaji, or kanji input.
// use word list to generate random word
// use submit button to take input and check against the word meaning
// keep score if correct

import { useRef, useState, useEffect } from 'react';
import { Words } from "../../../../words/JPWordDefinitions.js"


export default function FlashCardContainer() {
    const data = Words;
    const [score, setScore] = useState(0);
    const answer = useRef();
    const [word, setWord] = useState({});
    const [isHiragana, setIsHiragana] = useState(false);

    const setWordValues = (data) => {
        const random = Math.floor(Math.random() * data.length);
        setWord(data.find(item => item.id === random));
        setIsHiragana(Math.random() > 0.5);
        answer.current.value = '';
    }

    useEffect(() => {
        setWordValues(data);
    }, []);

    const submitAnswer = (event) => {
        event.preventDefault();
        const a = answer.current.value;
        let s = score;

        if((a === word?.primary_meaning.toLowerCase() && isHiragana) 
            || (!isHiragana && (a === word?.hiragana.toLowerCase() 
            || a === word?.kanji.toLowerCase()
            || a === word?.romaji.toLowerCase()))){
            setScore(s + 1);
        }
        setWordValues(data);
    }

    return (
        <div className='game-container'>
            <h1 className='game-header'>Flash Cards</h1>
            <p className='game-question'>{isHiragana ? word?.hiragana : word?.primary_meaning}</p>
            <p className='game-score'>{`Score: ${score}`}</p>
            <form className='game-submit' onSubmit={submitAnswer} >
                <input
                    className='game-input'
                    type='text'
                    id='answer'
                    name='answer'
                    ref={answer}
                    autoComplete='off'
                />
                <button className='game-submit-button' type="submit" onClick={submitAnswer}>Submit Answer</button>
            </form>
        </div>
    )
}