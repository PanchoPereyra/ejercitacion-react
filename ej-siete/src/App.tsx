import { Oferta } from './components/Producto';

export function App() {
  return (

    <div className="p-6 flex gap-4 flex-wrap justify-center">
      <Oferta
        nombre="Teclado"
        precio={45000}
        stock={12}
        oferta={true}
      />

      <Oferta
        nombre="Mouse"
        precio={18000}
        stock={0}
        oferta={false}
      />

      <Oferta
        nombre="Monitor"
        precio={320000}
        stock={3}
        oferta={true}
      />
    </div>
  );
}



export default App;