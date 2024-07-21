/* eslint-disable react/jsx-key */
import {Three} from '@/components/Icons/ForMarket/three';
import {MarketItem} from '@/components/Marketitem/marketItem';

export const Market = () => {
	// Получение улучшений из бд

	const IconsComponenst = [

		<Three stroke='white' width={40} height={40}/>,
	];

	return (
		<div className='pt-10 flex flex-col gap-2 h-full'>
			{/*
				1 элемент магазина
			*/}

			{

				IconsComponenst.map((item, index) => (
					<MarketItem key={index}>{item}</MarketItem>
				))
			}

			{/*
				цикл по полученому response
			*/}

		</div>
	);
};
