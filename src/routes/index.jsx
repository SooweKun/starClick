import {createFileRoute} from '@tanstack/react-router';
import {App} from '@/pages/main/App';
export const Route = createFileRoute('/')({
	component: () => <App />,
});
