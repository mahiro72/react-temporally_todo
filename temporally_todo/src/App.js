import {useReducer,useEffect} from 'react'
import reducer from './reducer';
import './App.css';

import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import { todoContext } from './context/todoContext';


const MyStrage = "todoListData"

function App() {

  // About state 
  // [ {id:0,title:'',} ,....]
  const localData = JSON.parse(localStorage.getItem(MyStrage))
  const initialState = localData?localData:[]

  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    console.log('call effect')
    localStorage.setItem(MyStrage,JSON.stringify(state));
  }, [state])

  return (
    <todoContext.Provider 
      value={{
        state:state,
        dispatch:dispatch,
      }}
    >
      <div className="h-100">
        <Header />
        <NewTodoForm />
        <TodoList />
      </div>
    </todoContext.Provider>

  );
}

export default App;
