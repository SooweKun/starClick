import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';

const queryClient = new QueryClient();
const router = createRouter({
	routeTree,
});

export const Provider = ({children}) => (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router}>{children}</RouterProvider>
	</QueryClientProvider>
);
