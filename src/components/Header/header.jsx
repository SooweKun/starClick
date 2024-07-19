import {Button} from '@/components/ui/button';
import {
	DropdownMenu, DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Link} from '@tanstack/react-router';
import {MenuIcon} from '../Icons/MenuIcon/menuIcon.jsx';

const Menu = () => (
	<DropdownMenu>
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
							Settings
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to='/Market' className='w-56'>Market</Link>
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	</DropdownMenu>
);

export const Header = () => {
	return (
		<div className='flex justify-between px-5 pt-7 w-full'>
			<Menu />
			<Button variant='outline'>Connect</Button>
		</div>
	);
};
