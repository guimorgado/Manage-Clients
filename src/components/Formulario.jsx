/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Formulario = ({ cliente }) => {
	const nuevoClienteSchema = Yup.object().shape({
		nombre: Yup.string()
			.min(3, 'El nombre es muy corto')
			.required('El nombre del cliente es obligatorio'),
		empresa: Yup.string().required('El nombre de la empresa es obligatorio'),
		email: Yup.string()
			.email('Email no valido')
			.required('El email es obligatorio'),
		telefono: Yup.number()
			.typeError('El numero no es valido')
			.integer('Numero no valido'),
		notas: ''
	});

	const navigate = useNavigate();

	const handleSubmit = async valores => {
		try {
			let respuesta;
			if (cliente.id) {
				// Editar un registro
				const url = `http://localhost:4000/clientes/${cliente.id}`;

				respuesta = await fetch(url, {
					method: 'PUT', // actualizar
					body: JSON.stringify(valores),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			} else {
				// Nuevo registro
				const url = 'http://localhost:4000/clientes';

				respuesta = await fetch(url, {
					method: 'POST',
					body: JSON.stringify(valores),
					headers: {
						'Content-Type': 'application/json'
					}
				});
			}
			await respuesta.json();
			navigate('/clientes');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='mx-auto w-3/4 mt-16 shadow-lg p-10 bg-white'>
			<h1 className='text-center text-2xl font-bold'>
				{cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
			</h1>

			<Formik
				initialValues={{
					nombre: cliente?.nombre ?? '',
					empresa: cliente?.empresa ?? '',
					email: cliente?.email ?? '',
					telefono: cliente?.telefono ?? '',
					notas: cliente?.notas ?? ''
				}}
				enableReinitialize={true}
				onSubmit={async (values, { resetForm }) => {
					await handleSubmit(values);
					resetForm();
					navigate('/clientes');
				}}
				validationSchema={nuevoClienteSchema}
			>
				{({ errors, touched }) => {
					console.log(touched);
					return (
						<Form>
							<div className='grid mt-10'>
								<label className='text-xl font-medium'>Nombre:</label>
								<Field
									id='nombre'
									className='h-10 bg-gray-100 pl-3 mt-2'
									type='text'
									name='nombre'
									placeholder='Nombre del Cliente'
								/>
								{errors.nombre && touched.nombre ? (
									<div className='w-full px-2 bg-red-600 text-white text-xl text-center mt-2'>
										{errors.nombre}
									</div>
								) : null}
							</div>
							<div className='grid mt-5'>
								<label className='text-xl font-medium'>Empresa:</label>
								<Field
									id='empresa'
									className='h-10 bg-gray-100 pl-3 mt-2'
									type='text'
									name='empresa'
									placeholder='Empresa del Cliente'
								/>
								{errors.empresa && touched.empresa ? (
									<div className='w-full px-2 bg-red-600 text-white text-xl text-center mt-2'>
										{errors.empresa}
									</div>
								) : null}
							</div>
							<div className='grid mt-5'>
								<label className='text-xl font-medium'>E-mail:</label>
								<Field
									id='email'
									className='h-10 bg-gray-100 pl-3 mt-2'
									type='email'
									name='email'
									placeholder='Email del Cliente'
								/>
								{errors.email && touched.email ? (
									<div className='w-full px-2 bg-red-600 text-white text-xl text-center mt-2'>
										{errors.email}
									</div>
								) : null}
							</div>
							<div className='grid mt-5'>
								<label className='text-xl font-medium'>Teléfono:</label>
								<Field
									id='telefono'
									className='h-10 bg-gray-100 pl-3 mt-2'
									type='tel'
									name='telefono'
									placeholder='Teléfono del Cliente'
								/>
							</div>
							<div className='grid mt-5'>
								<label className='text-xl font-medium'>Notas:</label>
								<Field
									as='textarea'
									id='notas'
									className='h-10 bg-gray-100 h-40 pl-3 pt-3 mt-2'
									type='text'
									name='notas'
									placeholder='Notas del Cliente'
								/>
							</div>
							<input
								type='submit'
								value={cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
								className='w-full bg-blue-700 text-white py-3 mt-5 text-xl font-bold'
							/>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

Formulario.defaultProps = {
	cliente: {}
};

export default Formulario;
