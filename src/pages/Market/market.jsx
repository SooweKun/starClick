import {MarketItem} from '@/components/Marketitem/marketItem';

export const Market = () => {
	return (
		<div className='pt-10 flex flex-col gap-2 h-[100vh]'>
			<MarketItem />
			<MarketItem />
			<MarketItem />
			<MarketItem />
		</div>
	);
};
