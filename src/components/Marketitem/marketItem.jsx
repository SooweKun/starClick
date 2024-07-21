import {Button} from '@/components/ui/button';

export const MarketItem = ({children, index}) => (

	<div className='px-5' key={index}>
		<div className='flex justify-between'>
			<div className='flex gap-3'>
				<div className='bg-black flex items-center rounded-sm w-[45px] h-[45px] justify-center'>
					{children}
				</div>
				<div>
					<h1>Прибыль в час</h1>
					<p>Value: 3</p>
				</div>
			</div>
			<Button>Прокачать</Button>
		</div>
	</div>
);

