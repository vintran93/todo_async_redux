export const getTodos = () => {
    return dispatch => {
        dispatch({type: "LOADING_TODOS"})
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(todos => dispatch({type: 'TODOS_LOADED', payload: todos}))
    }
}

export const addTodo = (todo) => {
    return dispatch => {
        dispatch({type: 'ADDING_TODO'})
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todo => dispatch({type: 'TODO_ADDED', payload: todo}))
    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch({type: 'DELETING_TODO'})
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => dispatch({type: 'TODO_DELETED', payload: id}))
    }
}