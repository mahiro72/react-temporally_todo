

const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            const newTodo={
                id:state.length===0?1:state.length+1,
                title:action.title
            }
            return [newTodo,...state]

        case 'DELETE_TODO':
            return state.filter((todo)=>todo.id!==action.id)
        
        default:
            return state
    }

}


export default reducer;