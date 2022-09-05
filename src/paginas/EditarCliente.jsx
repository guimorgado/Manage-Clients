import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
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

	return (
		<div>
			<h1 className='text-3xl font-bold'>Editar Cliente</h1>
			<p>Utiliza este formulario para editar datos de un cliente</p>
			{cliente?.nombre ? <Formulario cliente={cliente} /> : 'Cliente no valido'}
		</div>
	);
};

export default EditarCliente;
