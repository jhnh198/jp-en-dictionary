import './Grammar.css'

export default function GrammarList({ data, getGuideFromList }) {
    return (
        <div className='grammar-list-container'>
            <h1 className='grammar-list-header'>Grammar Guides</h1>
            <ul className='grammar-list'>
                {data.map((item) => (
                    <li onClick={() => getGuideFromList(item)} key={item.id}> {item.title}</li>
                ))}
            </ul>
        </div>

    )
}