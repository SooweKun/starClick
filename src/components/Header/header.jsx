import {Button} from '@/components/ui/button';
import {
	DropdownMenu, DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {MenuIcon} from '../MenuIcon/menuIcon.jsx';

export const Header = () => {
	return (
		<div className='flex justify-between px-10 pt-7'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button><MenuIcon width={36} height={36} fill='black' /></button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56 mx-3'>
					<DropdownMenuLabel>Menu</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Accaunt
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
						</DropdownMenuItem>
						<DropdownMenuItem>
							Market
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<Button variant='outline'>Connect</Button>
		</div>
	);
};
