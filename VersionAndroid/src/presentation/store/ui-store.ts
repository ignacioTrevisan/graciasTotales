import { create } from "zustand";

export interface uiState {
    isOpenAddProductModal: boolean;
    openProductModal: () => void;
    closeProductModal: () => void;
}

export const storeUi = create<uiState>()((set, get) => ({
    isOpenAddProductModal: false,
    openProductModal: () => { set({ isOpenAddProductModal: true }) },
    closeProductModal: () => { set({ isOpenAddProductModal: false }) },
}));