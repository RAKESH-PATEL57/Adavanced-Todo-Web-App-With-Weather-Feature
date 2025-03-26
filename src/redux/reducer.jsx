/* eslint-disable no-case-declarations */
// Initial state
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  user: JSON.parse(localStorage.getItem('user')) || null,
  weather: null
};

// Reducer function
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload
      };
      
    case 'LOGOUT':
      // Remove user from localStorage
      localStorage.removeItem('user');
      return {
        ...state,
        user: null
      };
      
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      // Store tasks in localStorage
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks
      };
      
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      // Update tasks in localStorage
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks
      };
      
    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map(task => 
        task.id === action.payload 
          ? { ...task, completed: !task.completed } 
          : task
      );
      // Update tasks in localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks
      };
      
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload
      };
      
    default:
      return state;
  }
}

export default rootReducer;