const todoReducer = (state = {todos: [], loading: false}, action ) => {

    switch(action.type){
        case 'LOADING_TODOS':
            return {
                ...state,
                loading: true
            }
        case 'TODOS_LOADED':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case 'ADDING_TODO':
            return {
                ...state,
                loading: true
            }
        case 'TODO_ADDED':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false
            }
        case 'TODO_DELETED':
            return {
                ...state,
                todos: [...state.todos.filter(todo => `${todo.id}` !== action.payload)],
                loading: false
            }
        default: 
            return state
    }
}

export default todoReducer;
