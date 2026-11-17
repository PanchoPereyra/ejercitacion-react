import { Producto } from './components/Producto';

export function App() {
  return (
    <div className="p-6 flex gap-4">
      <Producto 
        nombre="Teclado" 
        precio={45000} 
        stock={12} 
        oferta={true} 
      />
      
      <Producto 
        nombre="Mouse" 
        precio={18000} 
        stock={0} 
      />
    </div>
  );
}

export default App;