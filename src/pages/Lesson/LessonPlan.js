import "./LessonPage.css";

export default function LessonPlan({data}){
    return (
        <>
            <div className="lesson-plan">
                <h1 className="lesson-plan-header">{data.title}</h1>
                <p className="lesson-plan-body">
                    {data.body}             
                </p>
            </div>

        </>
    )
}