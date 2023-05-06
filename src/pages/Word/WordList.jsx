import { Link, useParams} from 'react-router-dom';

const WordList = ( {data, getWordFromList } ) => {
    return (
        <>
            <ul>
                    {data.map((item) => (
                        <li onClick={() => getWordFromList(item)} key={item.id}> {item.hiragana} : {item.primary_meaning} </li>
                    ))}
            </ul>
        </>
    )

}

export default WordList;