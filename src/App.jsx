import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import EditarCiente from './paginas/EditarCliente';
import Inicio from './paginas/Inicio';
import NuevoCiente from './paginas/NuevoCliente';
import VerCiente from './paginas/VerCliente';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/clientes' element={<Layout />}>
					<Route index element={<Inicio />} />
					<Route path='nuevo' element={<NuevoCiente />} />
					<Route path='editar/:id' element={<EditarCiente />} />
					<Route path=':id' element={<VerCiente />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
