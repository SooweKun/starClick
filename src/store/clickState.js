import {create} from 'zustand';

export const useClickStore = create(set => ({
	click: 0,
	incriment: () => set(state => ({click: state.click + 1})),
}));

