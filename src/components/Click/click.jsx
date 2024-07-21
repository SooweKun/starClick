import {StarIcon} from '../Icons/StarIcon/starIcon';

export const Click = ({handleClick, spring, springSmallStar}) => (
	<div className='flex justify-center w-full h-[calc(100vh-165px)] items-center relative' onClick={handleClick}>
		<StarIcon
			width={390}
			height={400}
			stroke='black'
			handleClick={handleClick}
			spring={spring}
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
