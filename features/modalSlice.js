import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
      console.log('openModal fired');
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      console.log('closeModal fired');
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectIsModalOpen = (state) => state.modal.isModalOpen;

export default modalSlice.reducer;
