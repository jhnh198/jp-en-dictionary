export default function LessonList({ data, getLessonFromList }) {
    return (
        <>
            <ul>
                    {data.map((item) => (
                        <li onClick={() => getLessonFromList(item)} key={item.id}> {item.title}</li>
                    ))}
            </ul>
        </>
    )
}