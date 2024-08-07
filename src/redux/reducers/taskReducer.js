// src/redux/reducers/taskReducer.js
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_TASKS_SUCCESS":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case "FETCH_TASKS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "TOGGLE_TASK_COMPLETION":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
