import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../store";

export type ModalTypes =
  | {
      title: string | undefined;
      content: React.ReactNode | undefined;
      width?: 520 | 600 | 768 | 1024 | 1366 | 1920;
    }
  | undefined;

type ModalStateType = ModalTypes & { open: boolean };

const initialState: ModalStateType = {
  open: false,
  title: undefined,
  content: undefined,
  width: 520,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<ModalTypes>) => ({
      ...state,
      ...payload,
      open: true,
    }),
    closeModal: () => initialState,
  },
});

export const ModalState = (state: RootState) => state.modal;

export const { showModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
