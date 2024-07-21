import {Click} from '@/components/Click/click';
import {Mains} from '@/components/Mains/mains';
import {useSpring} from '@react-spring/web';
import {useCallback, useState} from 'react';

export const App = () => {
	const [countClick, setCountClick] = useState(0);

	const handleClick = useCallback(() => {
		setCountClick(countClick + 1);

		api.start({
			from: {
				scale: 0.5,
			},
			to: {
				scale: 1,
			},
			onStart() {
				apiSmallStar.start({
					from: {
						scale: 0,
						y: 0,
						opacity: 1,
					},
					to: [
						{
							scale: 1,
							y: -300,
							opacity: 2,
						},
						{
							scale: 1,
							opacity: 0,
						},
					],
				});
			},
		});
	}, [countClick]);

	const [spring, api] = useSpring(() => ({
		from: {
			scale: 1,
			y: 0,
		},
		config: {
			duration: 300,
			mass: 1,
		},
	}));

	const [springSmallStar, apiSmallStar] = useSpring(() => ({
		from: {
			scale: 1,
			opacity: 1,
		},
		config: {
			duration: 500,
			mass: 1,
			tension: 280,
			friction: 60,
			bounce: 1,
			precision: 0.1,
		},
	}));

	return (
		<>
			<Mains countClick={countClick}/>
			<Click
				handleClick={handleClick}
				spring={spring}
				springSmallStar={springSmallStar}
			/>
		</>
	);
};
