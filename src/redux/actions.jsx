// Authentication actions
export const login = (username, password) => {
  // Simple mock authentication
  if (username && password) {
    return {
      type: 'LOGIN',
      payload: { username }
    };
  }
  return { type: 'LOGIN_FAILED' };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

// Task actions
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: Date.now(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      isOutdoor: task.isOutdoor,
      completed: false,
      createdAt: new Date().toISOString()
    }
  };
};

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id
  };
};

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: id
  };
};

// Weather action
export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
      );
      const data = await response.json();
      
      dispatch({
        type: 'SET_WEATHER',
        payload: data
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
};