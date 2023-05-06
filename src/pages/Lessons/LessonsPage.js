import LessonPlan from './LessonPlan'
import LessonList from './LessonList'
import { Lessons } from './LessonPlans/Lessons';
import { useState } from 'react';

export default function LessonsPage(){
    const data = Lessons;
    const [lesson, setLesson] = useState({});

    const getLessonFromList = (lesson) => {
        setLesson(lesson);
    }


    return (
        <>
            <h1> Lessons </h1>
            <LessonList  getLessonFromList={getLessonFromList} data={data}/>
            <LessonPlan data={lesson}/>
        </>
    )
}