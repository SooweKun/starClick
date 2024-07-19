import {Market} from '@/pages/Market/market';
import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/Market/')({
	component: () => <Market/>,
});
