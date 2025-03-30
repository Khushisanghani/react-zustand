import useCourseStore from "../store/CourseStore";
function CourseList(){
    const {courses,removeCourse,toggleCourseStatus} = useCourseStore((state) => ({
        courses: state.courses,
        removeCourse: state.removeCourse,
        toggleCourseStatus: state.toggleCourseStatus,
    }));
    return(
        <>
            <ul>
                {courses.map((course, i) => {
                    return(
                        <ul key={i}>
                            <li>
                                <input type="checkbox" checked={course} onChange={(e) => toggleCourseStatus(course.id)}/>
                                <span>{course.title}</span>
                                <button onClick={() => removeCourse()}>Delete</button>
                            </li>
                        </ul>
                    )
                })}
            </ul>
        </>
    )
}
export default CourseList;