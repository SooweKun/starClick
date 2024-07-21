import {Button} from '@/components/ui/button';

export const MarketItem = () => (

	<div className='px-5'>
		<div className='flex justify-between'>
			<div className='flex gap-3'>
				<div className='bg-black flex items-center rounded-sm w-[45px] h-[45px] justify-center'>
				</div>
				<div className=''>
					<h1>Прибыль в час</h1>
					<p>Value: 3</p>
				</div>
			</div>
			<Button>Прокачать</Button>
		</div>
	</div>
);

