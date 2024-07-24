import SmallStar from '@/assets/SmallStar.png';
import {Progress} from '@/components/ui/progress';
import {useClickStore} from '@/store/clickState';
import {useUserStore} from '@/store/userState';
import axios from 'axios';
// Import {useQuery} from '@tanstack/react-query';
// import axios from 'axios';
export const Mains = () => {
	const countClick = useClickStore(state => state.click);
	const {user} = useUserStore();
	console.log(user);

	const saveClicks = () => {
		return axios.post('http://127.0.0.1:3000/api/saveClicks', {countClick});
	};

	// UseQuery({
	// 	queryKey: ['countClick'],
	// 	queryFn: saveClicks,
	// 	refetchInterval: 30 * 1000,
	// });

	return (
		<div className='flex justify-between pt-4 px-5 w-full'>
			<div className='flex gap-3 flex-col'>
				<div className='flex gap-1'>
					<img src={SmallStar} alt='not found' />
					<p>{countClick}</p>
				</div>
				<p>|  В час</p>
			</div>
			<Progress className='w-36 h-5 bg-black' value={Math.min(100, (countClick % 100) / 100 * 100)}/>
		</div>
	);
};
