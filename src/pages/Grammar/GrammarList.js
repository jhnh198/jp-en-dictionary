import { Link } from 'react-router-dom'

export default function GrammarList({ data, getGuideFromList }) {
    return (
        <>
            <ul>
                    {data.map((item) => (
                        <li onClick={() => getGuideFromList(item)} key={item.id}> {item.title}</li>
                    ))}
            </ul>
        </>
    )
}