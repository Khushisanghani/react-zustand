import { useState } from "react";
import useTodoStore from "../store/TodoStore";

function TodoList(){
    const {todos,addTodo,removeTodo,toggleTodo} = useTodoStore();
    const [newTodo,setNewTodo] = useState('');
    const handleAdd = (e) => {
        e.preventDefault();
        if(newTodo){
            addTodo(newTodo);
            setNewTodo('');
        }
    }
    return(
        <>
            <div>
                <h1>Todo List</h1>
                <input 
                    placeholder="ADD TODOS"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />&nbsp;
                <button onClick={handleAdd}>Add</button>
            </div>
            <table style={{ border: '1px solid black',bordercollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo)=>(
                        <tr key={todo.id}>
                            <td  style={{
                                        textDecoration: todo.completed  
                                        ? 'line-through' : 'none',
                                        cursor: 'pointer'}} 
                                        onClick={() => toggleTodo(todo.id)}>
                                {todo.text}
                            </td>
                            <td><button onClick={() => removeTodo(todo.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoList;