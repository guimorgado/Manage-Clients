import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fotoDePerfil from '../img/fotoPerfil.png';

const VerCliente = () => {
	const { id } = useParams();
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(false);
	useEffect(() => {
		setCargando(!cargando);
		const obtenerClienteAPI = async () => {
			try {
				const url = `http://localhost:4000/clientes/${id}`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setCliente(resultado);
			} catch (error) {
				console.log(error);
			}
			setCargando(false);
		};
		obtenerClienteAPI();
	}, []);

	return Object.keys(cliente).length === 0 ? (
		<p>No hay Resultados</p>
	) : (
		<div>
			{cargando ? (
				'cargando...'
			) : (
				<div className='mx-auto bg-white rounded-xl shadow w-1/2 p-10'>
					<div className='flex items-center'>
						<img
							src={fotoDePerfil}
							className='w-40 h-40 rounded-full'
							alt='Foto de Perfil'
						/>
						<div>
							<h1 className='text-xl ml-5 font-medium'>{cliente.nombre}</h1>
							<p className='text-md ml-5 font-medium mt-2'>
								<span className='text-gray-400'>Pertenence a la empresa:</span>{' '}
								{cliente.empresa}
							</p>
							<p className='text-md ml-5 font-medium mt-2'>
								<span className='text-gray-400'>Correo:</span> {cliente.email}
							</p>
							<p className='text-md ml-5 font-medium mt-2'>
								<span className='text-gray-400'>Teléfono:</span>{' '}
								{cliente.telefono}
							</p>
						</div>
					</div>
					<div className='mt-10 '>
						<p className='text-md font-medium mt-2'>
							<span className='text-gray-400'>Notas:</span> {cliente.notas}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default VerCliente;
