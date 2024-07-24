import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useClickStore = create(
	persist(
		set => ({
			click: 0,
			incriment: () => set(state => ({click: state.click + 1})),
		}),
		{
			name: 'click',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
