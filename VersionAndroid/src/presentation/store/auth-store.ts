import { create } from "zustand";

export interface uiState {
    status: 'Logged' | 'Unlogged' | 'Loading';
    user: user | undefined
    ErrorMessage: string | undefined,
    points: number,
    mode: 'Cliente' | 'Admin' | undefined,
    canjes: [],
    setLogged: (user: user) => void;
    unlogue: (error?: string) => void;

}
export interface user {
    displayName: string,
    email: string,
    uid: string,
    photoURL: string
}
export const authStore = create<uiState>()((set, get) => ({
    user: undefined,
    status: 'Unlogged',
    ErrorMessage: undefined,
    points: 0,
    mode: undefined,
    canjes: [],
    setLogged: (user: user) => { set({ user: user, status: 'Logged' }) },
    unlogue: (error?: string) => {
        set({ user: undefined, status: 'Unlogged', canjes: [], mode: undefined, points: 0, ErrorMessage: error ? error : undefined })
    },

}));