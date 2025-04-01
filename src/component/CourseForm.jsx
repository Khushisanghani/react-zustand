import { useState } from "react";
import useCourseStore from "../store/CourseStore";
function CourseForm(){
    const { courses, removeCourse, toggleCourseStatus ,addCourse} = useCourseStore();
    const [courseTitle,setCourseTitle] = useState('');
    const handleCourseSubmit = (e) => {
        if(!courseTitle) 
            return alert('Please add a course title');
        e.preventDefault();
        addCourse({
            id:Math.ceil(Math.random() * 10000),
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
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course,i) => (
                        <tr key={i}>
                             <td  style={{
                                        textDecoration: course.completed  
                                        ? 'line-through' : 'none',
                                        cursor: 'pointer'}} 
                                        onClick={() => toggleCourseStatus(course.id)}>
                                {course.title}
                            </td>
                            <td><button onClick={() => removeCourse(course.id)}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default CourseForm;