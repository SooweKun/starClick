import {Click} from '@/components/Click/click';
import {Mains} from '@/components/Mains/mains';
import {useCallback, useState} from 'react';

export const App = () => {
	const [countClick, setCountClick] = useState(0);

	const handleClick = useCallback(() => {
		setCountClick(countClick + 1);
	}, [countClick]);

	return (
		<>
			<Mains countClick={countClick}/>
			<Click handleClick={handleClick}/>
		</>
	);
};
