

const ADD_TODO    = 'ADD_TODO',
	  EDIT_TODO   = 'EDIT_TODO',
	  DELETE_TODO = 'DELETE_TODO',
	  SHOW_TODOS  = 'SHOW_TODOS';

export default addToDo = ()=>{

	return {
		type: ADD_TODO,
		payload : {

		}
	}
}

export default editToDo = ()=>{

	return {
		type: EDIT_TODO,
		payload : {
			
		}
	}
}
export default deleteToDo = ()=>{

	return {
		type: DELETE_TODO,
		payload : {
			
		}
	}
}
export default showToDos = ()=>{

	return {
		type: SHOW_TODOS,
		payload : {
			
		}
	}
}