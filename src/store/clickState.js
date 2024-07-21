import {create} from 'zustand';

export const useClickStore = create((set, get) => ({
	click: 0,
	incriment: click => set(click + 1),
	getClicks: () => get.users,
}));

