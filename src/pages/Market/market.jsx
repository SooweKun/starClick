/* eslint-disable react/jsx-key */
import {Three} from '@/components/Icons/ForMarket/three';
import {Two} from '@/components/Icons/ForMarket/two';
import {MarketItem} from '@/components/Marketitem/marketItem';
import {Switch} from '@/components/ui/switch';
import {useUserStore} from '@/store/userState';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const Market = () => {
	// Получение улучшений из бд

	const {user} = useUserStore();
	console.log(user.id);

	const IconsComponenst = [
		<Three stroke='white' width={40} height={40}/>,
		<Two stroke='white' width={40} height={40}/>,
	];

	const getInvorements = () => {
		return axios.get('http://127.0.0.1:3000/api/improvement/getImprovements');
	};

	const getUserInvorements = () => {
		return axios.get(`http://127.0.0.1:3000/api/improvement/getUserImprovements/${user.id}`);
	};

	const {data: invorements} = useQuery({
		queryKey: ['invorements'],
		queryFn: getInvorements,
		select: ({data}) => data,
	});

	const {data: userInvorements, isSuccess} = useQuery({
		queryKey: ['userInvorements'],
		queryFn: getUserInvorements,
		select: ({data}) => data,
	});

	console.log(userInvorements, 'fff');

	return (
		<div className='pt-10 flex flex-col gap-2 h-full'>
			<div className='flex flex-row gap-5 items-center justify-center'>
				<p>ffff</p>
				<Switch />
			</div>
			{
				invorements && invorements.map((item, index) => (
					<MarketItem key={index} itemName={item.name} data={isSuccess ? userInvorements[0].value : 'none'}>
						{
							IconsComponenst[index]
						}
					</MarketItem>
				))

			}

			{/*
				цикл по полученому response
			*/}

		</div>
	);
};
