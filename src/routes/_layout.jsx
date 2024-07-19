import {Footer} from '@/components/Footer/footer';
import {Header} from '@/components/Header/header';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
	component: () => (
		<>
			<Header />,
			<Footer/>
		</>),
});
