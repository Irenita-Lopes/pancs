import './App.css'
import Navbar from './components/Navbar';
import Lista from './screens/Lista';
import Receitas from './screens/Receitas';
import Sobre from './screens/Sobre';

function App() {
  return (
    <main className='app'>
      <Navbar/>
      <Sobre/>
      <Lista/>
      <Receitas/>
    </main>
  )
}

export default App;
