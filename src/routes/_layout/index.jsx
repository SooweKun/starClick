import {App} from '@/pages/Main/App';
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/_layout/')({
	component: () => <App />,
});
