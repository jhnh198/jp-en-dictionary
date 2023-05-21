import LessonPlan from './LessonPlan'
import LessonList from './LessonList'
import { Lessons } from './LessonPlans/Lessons';
import { useState } from 'react';
import "./LessonPage.css";

export default function LessonsPage(){
    const data = Lessons;
    const [lesson, setLesson] = useState({});

    const getLessonFromList = (lesson) => {
        setLesson(lesson);
    }

    return (
        <>            
            <div className='lesson-page'>
                <LessonList getLessonFromList={getLessonFromList} data={data}/>
                <LessonPlan data={lesson}/>
            </div>
        </>
    )
}