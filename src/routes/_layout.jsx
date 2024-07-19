import {Footer} from '@/components/Footer/footer';
import {Header} from '@/components/Header/header';
import {createFileRoute, Outlet} from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
	component: () => (
		<div className='flex flex-col h-screen'>
			<Header />
			<Outlet/>
			<Footer/>
		</div>
	),
});
