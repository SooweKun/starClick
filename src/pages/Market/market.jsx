import {MarketItem} from '@/components/Marketitem/marketItem';

export const Market = () => {
	return (
		<div className='pt-10 flex flex-col gap-2'>
			<MarketItem/>
			<MarketItem/>
			<MarketItem/>
		</div>
	);
};
