import React,{useContext} from 'react'

import { todoContext } from '../context/todoContext';

import Todo from './Todo';



const TodoList = () => {

    const {state} = useContext(todoContext);

    return(
        <div>
            <ul className="container list-group">
                {state.map((todo)=><Todo key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList;
