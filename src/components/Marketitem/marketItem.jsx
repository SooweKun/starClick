import {Button} from '../ui/button';

export const MarketItemAll = ({children, index, itemName, description}) => (
	<div className='flex justify-between h-max' key={index}>
		<div className='flex gap-3'>
			<div className='bg-black flex items-center rounded-sm w-[46px] h-[46px] justify-center'>
				{children}
			</div>

			<div className='flex flex-col justify-between'>
				<p >{itemName}</p>
				<p className='leading-4'>{description}</p>
			</div>

		</div>
		<Button className='h-[45px] w-[45px]'>+</Button>
	</div>
);

export const MarketItemUser = ({children, index, itemName, value}) => (
	<div className='flex flex-row gap-2 h-auto' key={index}>

		<div className='bg-black flex items-center rounded-sm w-[46px] h-[46px] justify-center'>
			{children}
		</div>

		<div className='flex flex-col justify-between'>
			<p className='text-2xl leading-4'>{itemName}</p>
			<p className='leading-4'>Value: {value}</p>
		</div>
	</div>
);
