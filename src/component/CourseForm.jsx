import { useState } from "react";
import useCourseStore from "../store/CourseStore";
function CourseForm(){
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle,setCourseTitle] = useState('');
    const handleCourseSubmit = (e) => {
        if(!courseTitle) 
            return alert('Please add a course title');
        e.preventDefault();
        addCourse({
            id:Math.ceil(Math.random() + 1),
            title: courseTitle
        })
        setCourseTitle('');
    }
    return(
        <>  
        <h1>My Course List</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Add course Title" 
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                />&nbsp;
                <button onClick={(e) => handleCourseSubmit(e)}>Add</button>
            </form>
        </>
    )
}
export default CourseForm;