import {routeTree} from '@/routeTree.gen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import eruda from 'eruda';

eruda.init();
const queryClient = new QueryClient();
const router = createRouter({
	routeTree,
});

export const Provider = () => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router}/>
	</QueryClientProvider>
);

