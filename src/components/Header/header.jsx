import {Button} from '@/components/ui/button';
import {
	DropdownMenu, DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Link, useLocation} from '@tanstack/react-router';
import {useState} from 'react';
import {MenuIcon} from '../Icons/MenuIcon/menuIcon.jsx';

const Menu = () => {
	const {pathname} = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => setIsOpen(!isOpen);

	return (
		<DropdownMenu key={pathname}>
			<DropdownMenuTrigger asChild>
				<button onClick={handleMenuClick}><MenuIcon width={36} height={36} fill='black' /></button>
			</DropdownMenuTrigger>

			{isOpen && (
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
							<Link to='/Test' className='w-56'>Mains</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link to='/Market' className='w-56'>Market</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
};

export const Header = () => {
	return (
		<div className='flex justify-between px-5 pt-7 w-full'>
			<Menu />
			<Button variant='outline'>Connect</Button>
		</div>
	);
};
