import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Menu from './components/Menu';
import Pedido from './components/Pedidos'

//Nuestro componente principal 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Menu/>
      <Pedido />
    </div>
  );
}

export default App;
