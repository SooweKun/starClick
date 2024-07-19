import {Outlet, createRootRouteWithContext} from '@tanstack/react-router';

export const Route = createRootRouteWithContext()({
	component() {
		return (
			<>
				<Outlet />
				{/* <TanStackRouterDevtools /> */}
			</>
		);
	},
});
