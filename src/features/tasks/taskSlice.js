import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskid }) => {
            const index = tasks.findIndex(({ id }) => id === taskid);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskid }) => {
            const index = tasks.findIndex(({ id }) => id === taskid);
            tasks.splice(index, 1);
        },
        setAllDone: state => {
            return {
                ...state,
                tasks: state.tasks.map(task => ({
                    ...task,
                    done: true
                }))
            };
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const getTaskById = (state, taskId) =>
    selectTasks(state.tasks).find(({ id }) => id === taskId);
export default tasksSlice.reducer;