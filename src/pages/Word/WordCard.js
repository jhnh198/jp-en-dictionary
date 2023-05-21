import "./WordPage.css"
import { useParams } from 'react-router-dom';

function WordCard({data}){
    const {id} = useParams();

    return (
        <div className="word-card">
            <h1 className="word-card-header">{data.primary_meaning}</h1>

            <div className="word-card-content">
                <div className="card-col-1">
                    <p>Kanji: {data.kanji}</p>
                    <p>Hiragana: {data.hiragana}</p>
                    <p>Example Sentence: {data.example}</p>
                </div>
                <div className="card-col-2">
                    <p>Type: {data.type}</p>
                    <p>Romaji: {data.romaji}</p>
                </div>    
            </div>
        </div>
    )   
}

export default WordCard;

/*
{
    id: 0,
    img: 'acorn',
    primary_meaning: 'acorn',
    additional_meanings: '',
    hiragana: 'どんぐり',
    kanji: '団栗',
    romaji: 'donguri',
    kunyomi: '',
    onyomi: ''
    category: "nature", 
    type: "noun",
    example: "blah blah blah"
},
*/