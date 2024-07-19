import {Progress} from '@/components/ui/progress';

export const Mains = ({countClick}) => {
	return (
		<div className='flex justify-between pt-3 px-10'>
			<div>
				<div className='flex gap-3'>
					<img src='src/assets/Remove-bg.ai_1721163978145 3.svg' alt='not found' />
					<p>{countClick}</p>
				</div>
				<p>|  В час</p>
			</div>
			<Progress className='w-36 h-5 bg-black' value={50}/>
		</div>
	);
};
