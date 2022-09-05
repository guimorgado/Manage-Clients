import Formulario from '../components/Formulario';

const NuevoCliente = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold'>Nuevo Cliente</h1>
			<p>Llena los siguientes campos para registrar un cliente.</p>
			<Formulario />
		</div>
	);
};

export default NuevoCliente;
