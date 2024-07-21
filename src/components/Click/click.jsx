import {useClickStore} from '@/store/clickState';
import {useSpring} from '@react-spring/web';
import {StarIcon} from '../Icons/StarIcon/starIcon';

export const Click = () => {
	const {incriment} = useClickStore();
	const handleClick = () => {
		apiBigStar.start({
			from: {
				scale: 0.5,
			},
			to: {
				scale: 1,
			},
			onRest() {
				console.log('click');
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
							delay: 10,
						},
					],
				});
			},
		});
	};

	const [springBigStar, apiBigStar] = useSpring(() => ({
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
			scale: 1,
			opacity: 0,
			y: 0,
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
		<div className='flex justify-center w-full h-full items-center relative' onClick={incriment}>
			<StarIcon
				width={390}
				height={400}
				stroke='black'
				handleClick={handleClick}
				spring={springBigStar}
				className={'w-full'} />
			<StarIcon
				width={29}
				height={30}
				stroke='black'
				spring={springSmallStar}
				className={'w-auto absolute top-1/2'}
			/>
		</div>
	);
};
