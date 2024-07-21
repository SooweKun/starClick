import {Button} from '@/components/ui/button';

export const Settings = () => {
	return (
		<div className='flex  mt-1 border-t-[1px] border-t-black flex-col'>
			<p className='pt-5 flex justify-center'>Settings</p>
			<div className='flex flex-col gap-3 pl-[33px] pt-2'>
				<Button className='w-80 h-14  justify-center'>change accaunt</Button>
				<Button className='w-80 h-14  justify-center'>animations</Button>
			</div>
		</div>
	);
};
