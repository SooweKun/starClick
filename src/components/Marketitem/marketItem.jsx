import {Button} from '@/components/ui/button';

export const MarketItem = ({children, index, itemName, data}) => {
	console.log(data);
	return (<div className='px-5' key={index}>
		<div className='flex justify-between'>
			<div className='flex gap-3'>
				<div className='bg-black flex items-center rounded-sm w-[45px] h-[45px] justify-center'>
					{children}
				</div>
				<div>
					<h1>{itemName}</h1>
					<p>Value: </p>
				</div>
			</div>
			<Button>Прокачать</Button>
		</div>
	</div>
	);
};

