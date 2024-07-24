import {UserInvorementsContext, UserInvorementsContextProvider} from '@/components/Provider/provider.context';
import {Switch} from '@/components/ui/switch';
import {useContext} from 'react';

const Setting = () => {
	const {invorementsPage, setPage} = useContext(UserInvorementsContext);
	return (
		<div className='flex flex-row gap-1 bg-black rounded-sm px-4 py-2 text-white items-center justify-center'>
			<h1>{invorementsPage}</h1>
			<Switch onCheckedChange={() => setPage()} />
		</div>
	);
};

export const Settings = () => {
	return (
		<div className='flex items-center justify-center'>
			<UserInvorementsContextProvider>
				<Setting/>
			</UserInvorementsContextProvider>
		</div>
	);
};
