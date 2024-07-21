import {StarIcon} from '../Icons/StarIcon/starIcon';

export const Click = ({handleClick, spring, springSmallStar}) => (
	<div className='flex justify-center w-full h-[calc(100vh-165px)] items-center' onClick={handleClick}>
		<StarIcon width={390} height={400} stroke='black' handleClick={handleClick} spring={spring} />
		<StarIcon width={29} height={30} stroke='black' spring={springSmallStar} />
	</div>
);
