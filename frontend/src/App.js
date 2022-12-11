import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Login from './componentes/login';
import Register from './componentes/register';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import MenuLateral from './componentes/menulateral';
import MenuSuperior from './componentes/menusuperior';

import Productos from './componentes/productos';
import ProductosBorrar from './componentes/productosborrar';
import ProductosEditar from './componentes/productoseditar';
import ProductosAgregar from './componentes/productosagregar';

import Categorias from './componentes/categorias';
import CategoriasAgregar from './componentes/categoriasagregar';
import CategoriasEditar from './componentes/categoriaseditar';
import CategoriasBorrar from './componentes/categoriasborrar';


import Pedidos from './componentes/pedidos';
import PedidosAgregar from './componentes/pedidosagregar';
import PedidosEditar from './componentes/pedidoseditar';
import PedidosBorrar from './componentes/pedidosborrar';



function App()
{
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login></Login>} exact></Route>
          <Route path='/register' element={<Register></Register>} exact></Route>
          <Route path='/menu' element={<Menu></Menu>} exact></Route>
          <Route path='/footer' element={<Footer></Footer>} exact></Route>
          <Route path='/menulateral' element={<MenuLateral></MenuLateral>} exact></Route>
          <Route path='/menusuperior' element={<MenuSuperior></MenuSuperior>} exact></Route>

          <Route path='/productos' element={<Productos></Productos>} exact></Route>
          <Route path='/productosborrar/:codigo' element={<ProductosBorrar></ProductosBorrar>} exact></Route>
          <Route path='/productoseditar/:codigo' element={<ProductosEditar></ProductosEditar>} exact></Route>
          <Route path='/productosagregar' element={<ProductosAgregar></ProductosAgregar>} exact></Route>

          <Route path='/categorias' element={<Categorias></Categorias>} exact></Route>
          <Route path='/categoriasagregar' element={<CategoriasAgregar></CategoriasAgregar>} exact></Route>
          <Route path='/categoriaseditar/:codigo' element={<CategoriasEditar></CategoriasEditar>} exact></Route>
          <Route path='/categoriasborrar/:codigo' element={<CategoriasBorrar></CategoriasBorrar>} exact></Route>

          <Route path='/pedidos' element={<Pedidos></Pedidos>} exact></Route>
          <Route path='/pedidosagregar' element={<PedidosAgregar></PedidosAgregar>} exact></Route>
          <Route path='/pedidoseditar/:codigo' element={<PedidosEditar></PedidosEditar>} exact></Route>
          <Route path='/pedidosborrar/:codigo' element={<PedidosBorrar></PedidosBorrar>} exact></Route>

         


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
