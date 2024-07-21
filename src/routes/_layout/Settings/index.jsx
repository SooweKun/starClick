import {createFileRoute} from '@tanstack/react-router';
import {Settings} from '@/pages/Settings/settings';

export const Route = createFileRoute('/_layout/Settings/')({
	component: () => <Settings/>,
});
