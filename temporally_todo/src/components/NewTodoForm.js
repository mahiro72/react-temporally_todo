
import React,{useState,useContext} from 'react'


import { todoContext } from '../context/todoContext';

const NewTodoForm = () => {
    const [title,setTitle] = useState('');
    const {dispatch} = useContext(todoContext);

    const addTodo = (e)=>{
        e.preventDefault();
        dispatch({
            type:"ADD_TODO",
            title:title
        })
    }

    return (
        
        <form className="container border-bottom">
            <div className="my-3">
                <label className="form-label" >New Todo</label>
                <input type="text" className="form-control mb-3" onChange={(e)=>setTitle(e.target.value)} />
                <button 
                    type="submit" 
                    className="btn btn-secondary" 
                    onClick={addTodo}
                    disabled={!title}
                >
                    Add
                </button>
            </div>
        </form>
        
    )
}

export default NewTodoForm;
