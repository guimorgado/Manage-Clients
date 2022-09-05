/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Eye from '../icons/Eye';
import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';

const Cliente = ({ cliente, handleEliminar }) => {
	const { nombre, empresa, email, telefono, notas, id } = cliente;

	const navigate = useNavigate();

	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='p-3 text-center'>{nombre}</td>
			<td className='p-3 w-1/4'>
				<p>
					<span className='text-gray-800 font-bold'>Email: </span>
					{email}
				</p>
				<p>
					<span className='text-gray-800 font-bold'>Tel: </span>
					{telefono}
				</p>
			</td>
			<td className='p-3 text-center'>{empresa}</td>
			<td className='p-3 flex gap-5 w-full justify-center'>
				<button
					type='button'
					onClick={() => navigate(`/clientes/${id}`)}
					className='bg-blue-200 p-2 rounded-xl'
				>
					<Eye className='w-6 h-6 text-blue-500' />
				</button>
				<button
					type='button'
					className='bg-yellow-200 p-2 rounded-xl'
					onClick={() => navigate(`/clientes/editar/${id}`)}
				>
					<Pencil className='w-6 h-6 text-yellow-500' />
				</button>
				<button
					type='button'
					onClick={() => handleEliminar(id)}
					className='bg-red-200 p-2 rounded-xl'
				>
					<Trash className='w-6 h-6 text-red-500' />
				</button>
			</td>
		</tr>
	);
};

export default Cliente;
