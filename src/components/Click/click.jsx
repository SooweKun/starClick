import {StarIcon} from '../Icons/StarIcon/starIcon';

export const Click = ({handleClick}) => (
	<div className='flex justify-center w-full h-[calc(100vh-165px)] items-center' onClick={handleClick}>
		<StarIcon width={600} height={600} stroke='black'/>
	</div>
);
