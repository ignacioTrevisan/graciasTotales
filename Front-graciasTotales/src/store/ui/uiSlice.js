import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        modalOpen: false,
        modalEditing: false,
        sidebarOpen: false,
        queryOpen: false,
    },
    reducers: {
        openModal: (state) => {
            state.modalOpen = true;
        },
        closeModal: (state) => {

            state.modalOpen = false;
        },
        isModalEditing: (state) => {
            state.modalEditing = true;
        },
        isModalCreating: (state) => {
            state.modalEditing = false;
        },
        openSidebar: (state) => {
            state.sidebarOpen = true;
        },
        closeSidebar: (state) => {

            state.sidebarOpen = false;
        },
        openQuery: (state) => {
            state.queryOpen = true;
        },
        closeQuery: (state) => {

            state.queryOpen = false;
        },

    }
});


// Action creators are generated for each case reducer function
export const { openModal, isModalEditing, closeModal, isModalCreating, openSidebar, closeSidebar, openQuery, closeQuery } = uiSlice.actions;