import { useEffect, useState } from 'react';
import Cliente from '../components/Cliente';

const Inicio = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		const obtenerClientesAPI = async () => {
			try {
				const url = 'http://localhost:4000/clientes';
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setClientes(resultado);
			} catch (error) {
				console.log(error);
			}
		};

		obtenerClientesAPI();
	}, []);

	const handleEliminar = async id => {
		const confirmar = confirm('¿Deseas eliminar este cliente?');

		if (confirmar) {
			try {
				const url = `http://localhost:4000/clientes/${id}`;
				const respuesta = await fetch(url, {
					method: 'DELETE'
				});

				await respuesta.json();

				const arrayClientes = clientes.filter(cliente => cliente.id !== id);
				setClientes(arrayClientes);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<h1 className='text-3xl font-bold'>Lista de Clientes</h1>
			<p>Administra tus clientes</p>

			<table className='w-full mt-5 table-auto shadow bg-white'>
				<thead>
					<tr className='border-b'>
						<th className='p-2'>Nombre</th>
						<th className='p-2'>Contacto</th>
						<th className='p-2'>Empresa</th>
						<th className='p-2'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map(cliente => (
						<Cliente
							key={cliente.id}
							cliente={cliente}
							handleEliminar={handleEliminar}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Inicio;
