import { useParams } from 'react-router-dom';

function WordCard({data}){
    const {id} = useParams();

    return (
        <div className="word-card">
            <h1>{data.primary_meaning}</h1>
            <p>Type: {data.type}</p>
            <p>Kanji: {data.kanji}</p>
            <p>Hiragana: {data.hiragana}</p>
            <p>Romaji: {data.romaji}</p>
            <p>Kun'yomi: {data.kunyomi}</p>
            <p>On'yomi: {data.onyomi}</p>
            <p>Example Sentence: {data.example}</p>
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