import { Outlet, useLocation } from 'react-router-dom';
import UserAdd from '../icons/UserAdd';
import UserIcon from '../icons/UserIcon';

const Layout = () => {
	const location = useLocation();

	const urlActual = location.pathname;

	return (
		<div className='md:flex md:min-h-screen'>
			<div className='md:w-2/12 shadow-lg'>
				<h1 className='text-center text-lg mt-5 font-bold pb-5 border-b-2 border-gray-100'>
					CRM - Clientes
				</h1>

				<nav className='mt-10 w-full'>
					<a href='/clientes'>
						<li className='flex items-center justify-center'>
							{urlActual === '/clientes' ? (
								<div className='flex items-center justify-center'>
									<UserIcon className='w-6 h-6 text-gray-400' />
									<span className='text-gray-400'>Clientes</span>
								</div>
							) : (
								<div className='flex items-center justify-center'>
									<UserIcon className='w-6 h-6 text-black' />
									<span>Clientes</span>
								</div>
							)}
						</li>
					</a>
					<a href='/clientes/nuevo'>
						<li className='flex mt-5 items-center justify-center'>
							{urlActual === '/clientes/nuevo' ? (
								<div className='flex mt-5 items-center justify-center'>
									<UserAdd className='w-6 h-6 text-gray-400' />
									<span className='text-gray-400'>Nuevos Clientes</span>
								</div>
							) : (
								<div className='flex mt-5 items-center justify-center'>
									<UserAdd className='w-6 h-6 text-black' />
									<span>Nuevos Clientes</span>
								</div>
							)}
						</li>
					</a>
				</nav>
			</div>
			<div className='md:w-10/12 p-10 bg-gray-50 md:h-screen overflow-scroll'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
