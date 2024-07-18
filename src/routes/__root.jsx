import {Outlet, createRootRouteWithContext} from '@tanstack/react-router';
import {TanStackRouterDevtools} from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext()({
	component() {
		return (
			<>
				<Outlet />
				<TanStackRouterDevtools />
			</>
		);
	},
});
