import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: `tasks`,
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload: taskid}) => {
            const index = tasks.findIndex(({id}) => id === taskid);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskid }) => {
            const index = tasks.findIndex(({ id }) => id === taskid);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.done = true;
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;