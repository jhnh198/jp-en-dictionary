// simple game that creates random math problems and keeps a score of correct answers
// a + b = c
// number input component will be jp
// could be interesting to have a calculator number input format, so the user sees the buttons
import { useState } from 'react';

export default function SimpleMathContainer(){
    const [score, setScore] = useState(0);
    const [numberOne, setNumberOne] = useState(Math.floor(Math.random() * 10));
    const [numberTwo, setNumberTwo] = useState(Math.floor(Math.random() * 10));
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        submitAnswer(answer);
    } 

    const submitAnswer = (answer) => {
        const a = parseInt(answer);
        let s = score;
        if(a === numberOne + numberTwo) {
            s += 1;
            setScore(s);
        }
        setNumberOne(Math.floor(Math.random() * 10));
        setNumberTwo(Math.floor(Math.random() * 10));
        setAnswer('');
    }

    const convertToKanjiNumbers = (number) => {
        const kanjiNumbers = ['ゼロ', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        return kanjiNumbers[number];
    }

    const onKeyDown = (event) => {
        if(event.key === 'Enter'){
            submitAnswer(answer);
        }
    }

    {/*        
        input and submit button
        input gets number input
        submit function takes input, compares against total and increases score
    */}
    
    return (
        <div className='game-container'>
            <h1 className='game-header'> Simple Math </h1>
            <p className='game-question'> {`${convertToKanjiNumbers(numberOne)} + ${convertToKanjiNumbers(numberTwo)}`} </p>
            <p className='game-score'>{`Score: ${score}`}</p>
            <div className='game-submit'>
                <input
                    className='game-input'
                    type='input'
                    id='answer'
                    name='answer'
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    value={answer}
                    autoComplete='off'
                />
                <button type='submit' className='game-submit-button' onClick={handleClick}>Submit Answer</button>
            </div>
        </div>
    )
}