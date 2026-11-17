// 1. Importación del componente hijo
// import { MostrarOcultar } from './components/MostrarOcultar';
import { MostrarOcultar } from './components/MostrarOcultar';

export default function App() {
  return (
    // 2. Contenedor principal de pantalla completa:
    // min-h-screen: asegura que ocupe al menos el 100% del alto de la ventana.
    // flex items-center justify-center: centra el contenido vertical y horizontalmente.
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
        <h1 className="w-full text-center font-roboto text-3xl text-slate-900 ">
          ¿Qué es JSX?
        </h1>

        <div className="flex flex-wrap justify-center gap-4 font-style: italic text-slate-700">
          <MostrarOcultar significado="Sintaxis que permite escribir estructuras HTML de manera dentro de JavaScript. Se transforma en llamadas a funciones de React." />
        </div>
      </div>
    </main>
  );
} 