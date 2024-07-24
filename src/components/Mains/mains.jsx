import SmallStar from '@/assets/SmallStar.png';
import {Progress} from '@/components/ui/progress';
import {useClickStore} from '@/store/clickState';
// Import {useQuery} from '@tanstack/react-query';
// import axios from 'axios';
export const Mains = () => {
	const countClick = useClickStore(state => state.click);

	// Const saveClicks = () => {
	// 	axios.post('http://127.0.0.1:3000/api/saveClicks', {countClick});
	// };

	// const {data, isLoading, isError, isSuccess, error} = useQuery({
	// 	queryKey: ['countClick'],
	// 	queryFn: async () => saveClicks,
	// 	select: ({data}) => data,
	// });

	// console.log(data);
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
