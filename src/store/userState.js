/* eslint-disable camelcase */
import {create} from 'zustand';

export const useUserStore = create(
	set => ({
		user: {
			id: 0,
			name: '',
			last_name: '',
			first_name: '',
			hash: '',
		},
		addUser(data) {
			set(() => ({user: data}));
		},
	}),
);
