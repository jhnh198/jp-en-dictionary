import "./LessonPage.css";

export default function LessonList({ data, getLessonFromList }) {
    return (
        <div className="lesson-list-container">
                <h1 className="lesson-list-header"> Lessons </h1>    
                <ul className="lesson-list">
                        {data.map((item) => (
                            <li className='lesson-list-item' onClick={() => getLessonFromList(item)} key={item.id}> {item.title}</li>
                        ))}
                </ul>

        </div>

    )
}