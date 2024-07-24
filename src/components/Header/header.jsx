/* eslint-disable camelcase */
import {
	DropdownMenu, DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Link, useLocation} from '@tanstack/react-router';
import {retrieveLaunchParams} from '@telegram-apps/sdk';
import axios from 'axios';
import {useEffect} from 'react';
import {MenuIcon} from '../Icons/MenuIcon/menuIcon.jsx';

const Menu = () => {
	const {pathname} = useLocation();

	return (
		<DropdownMenu key={pathname}>
			<DropdownMenuTrigger asChild>
				<button><MenuIcon width={36} height={36} fill='black' /></button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 mx-3'>
				<DropdownMenuLabel>Menu</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link to='/' className='w-56'>Home</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Accaunt
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link to='/Settings' className='w-56'>Settings</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link to='/Market' className='w-56'>Market</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export const Header = () => {
	const [userData, setUserData] = useState({});
	const {initDataRaw} = retrieveLaunchParams();
	console.log(initDataRaw);

	const registerUser = async () => {
		const {data} = await axios.post('http://127.0.0.1:3000/api/auth/register', {
			init_data: initDataRaw,
		});

		return data;
	};

	useEffect({
		axios.post('http://127.0.0.1:3000/api/auth/register', {
			init_data: initDataRaw,
		})
	}, [initDataRaw]);

	
	// Const {data, isLoading, isError, error} = useQuery({
	// 	queryKey: ['user'],
	// 	queryFn: registerUser,
	// 	enabled: initDataRaw !== '',
	// });

	// if (isError) {
	// 	throw error;
	// }

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	console.log(data);
	return (
		<div className='flex justify-between px-5 pt-7 w-full'>
			<Menu />
			<div className='flex bg-black rounded-sm w-auto h-[36px] gap-2 justify-center items-center text-white px-3'>{data.name}</div>
		</div>
	);
};
