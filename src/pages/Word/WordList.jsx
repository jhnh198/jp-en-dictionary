import { Link, useParams} from 'react-router-dom';
import "./WordPage.css"

const WordList = ( {data, getWordFromList } ) => {
    return (
        <>
            <ul className="word-list">
                    {data.map((item) => (
                        <li onClick={() => getWordFromList(item)} key={item.id}> {item.hiragana} : {item.primary_meaning} </li>
                    ))}
            </ul>
        </>
    )

}

export default WordList;