import {Click} from '@/components/Click/click';
import {Mains} from '@/components/Mains/mains';
import {useSpring} from '@react-spring/web';
import {useCallback, useState} from 'react';

export const App = () => {
	const [countClick, setCountClick] = useState(0);

	const handleClick = useCallback(() => {
		setCountClick(countClick + 1);
		api.start({
			from: {scale: 0.5}, to: {scale: 1},
			onRest() {
				apiSmallStar.start({from: {scale: 0}, to: {scale: 1}});
			},
		});
	}, [countClick]);

	const [spring, api] = useSpring(() => ({
		from: {
			scale: 1,
		},
		config: {
			duration: 300,
			mass: 1,
		},
	}));

	const [springSmallStar, apiSmallStar] = useSpring(() => ({
		from: {
			scale: 0,
		},
		config: {
			duration: 300,
			mass: 1,
		},
	}));

	return (
		<>
			<Mains countClick={countClick}/>
			<Click
				handleClick={handleClick}
				spring={spring}
			/>
		</>
	);
};
