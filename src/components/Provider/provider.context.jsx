import {createContext, useState} from 'react';

export const UserInvorementsContext = createContext(null);

export const UserInvorementsContextProvider = ({children}) => {
	const [invorementsPage, setInvorementsPage] = useState('invoroments');

	const setPage = () => {
		setInvorementsPage(prev => (prev === 'invoroments' ? 'userInvoroments' : 'invoroments'));
	};

	return (
		<UserInvorementsContext.Provider value={{setPage, invorementsPage}}>
			{children}
		</UserInvorementsContext.Provider>
	);
};
