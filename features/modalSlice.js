import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  email: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { openModal, closeModal, updateEmail } = modalSlice.actions;

export const selectEmail = (state) => state.modal.email;

export const selectIsModalOpen = (state) => state.modal.isModalOpen;

export default modalSlice.reducer;
