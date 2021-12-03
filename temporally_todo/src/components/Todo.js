import React,{useContext} from 'react'

import { todoContext } from '../context/todoContext';

const Todo = ({todo}) => {
    const {dispatch} = useContext(todoContext);

    const deleteTodo = (e)=>{
        e.preventDefault();
        dispatch({
            type:"DELETE_TODO",
            id:todo.id
        })

    }

    return (
        <div className="row">
            <li 
                className="list-group-item 
                            my-2 
                            border 
                            col-8 
                            mx-auto"
            >{todo.title}</li>
            
            <button 
                type="submit" 
                className="btn 
                            btn-danger 
                            col-2
                            h-50 
                            mx-auto 
                            my-auto"
                onClick={deleteTodo}
            >Delete</button>


        </div>
    )
}

export default Todo
