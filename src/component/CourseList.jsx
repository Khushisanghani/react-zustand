import useCourseStore from "../store/CourseStore";

function CourseList() {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
        courses: state.courses,
        removeCourse: state.removeCourse,
        toggleCourseStatus: state.toggleCourseStatus,
    }));

    return (
        <>
            <h1>Course List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Check</th>
                        <th>Course Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={course.status}  
                                        onChange={() => toggleCourseStatus(course.id)}
                                    />
                                </td>
                                <td>{course.title}</td>
                                <td>
                                    <button onClick={() => removeCourse(course.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default CourseList;
