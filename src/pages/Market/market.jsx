/* eslint-disable react/jsx-key */
import {Three} from '@/components/Icons/ForMarket/three';
import {Two} from '@/components/Icons/ForMarket/two';
import {MarketItemAll, MarketItemUser} from '@/components/Marketitem/marketItem';
import {UserInvorementsContext, UserInvorementsContextProvider} from '@/components/Provider/provider.context';
import {Switch} from '@/components/ui/switch';
import {useUserStore} from '@/store/userState';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useContext} from 'react';

const MarketContent = ({iconsComponenst, invorements, userInvorements}) => {
	const {invorementsPage, setPage} = useContext(UserInvorementsContext);
	return (
		<div className='flex flex-col gap-4 px-5'>
			<HeaderMarket invorementsPage={invorementsPage} setPage={setPage} />
			<MarketList iconsComponenst={iconsComponenst} invorements={invorements} userInvorements={userInvorements} invorementsPage={invorementsPage} />
		</div>
	);
};

const HeaderMarket = ({invorementsPage, setPage}) => (
	<div className='flex flex-row gap-1 bg-black rounded-sm px-4 py-2 text-white items-center justify-center w-max h-auto'>
		<p>{invorementsPage === 'invoroments' ? 'Все улучшения' : 'Мои улучшения'}</p>
		<Switch onCheckedChange={() => setPage()} />
	</div>
);

const MarketList = ({iconsComponenst, invorements, userInvorements, invorementsPage}) => {
	return (
		<div className='flex flex-col gap-4'>
			{
				invorementsPage === 'invoroments' ? (
					invorements && invorements.map((item, index) => (
						<MarketItemAll key={index} itemName={item.name} description={item.description}>
							{
								iconsComponenst[index]
							}
						</MarketItemAll>
					))

				) : (
					userInvorements.map((item, index) => (
						<MarketItemUser key={index} itemName={invorements[item.improvement_id - 1].name} value={item.value}>
							{
								iconsComponenst[index]
							}
						</MarketItemUser>
					))
				)
			}
		</div>
	);
};

export const Market = () => {
	const {user} = useUserStore();

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

	const {data: userInvorements} = useQuery({
		queryKey: ['userInvorements'],
		queryFn: getUserInvorements,
		select: ({data}) => data,
	});

	return (
		<div className='pt-10 flex flex-col gap-2 h-full'>
			<UserInvorementsContextProvider>
				<MarketContent {...{iconsComponenst: IconsComponenst, invorements, userInvorements}} />
			</UserInvorementsContextProvider>
		</div>
	);
};
