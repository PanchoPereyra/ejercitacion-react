// 1. Importación del componente hijo
import { Producto } from './components/Productos';

export default function App() {
  return (
    // 2. Contenedor principal de pantalla completa:
    // min-h-screen: asegura que ocupe al menos el 100% del alto de la ventana.
    // flex items-center justify-center: centra el contenido vertical y horizontalmente.
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <h1 className="w-full text-center font-roboto text-3xl text-slate-900 ">
          Productos
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <Producto nombre="Teclado" precio={45000} stock={12} descripcion="Teclado mecánico Genius" />
          <Producto nombre="Mouse" precio={18000} stock={0} descripcion="Mouse inalámbrico Logitech" />
          <Producto nombre="Monitor" precio={320000} stock={3} descripcion="Monitor Samdung 24 pulgadas " />
        </div>
      </div>
    </main>
  );
}