import {App} from '@/pages/main/App.jsx';
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/_layout/')({
	component: () => <App />,
});
