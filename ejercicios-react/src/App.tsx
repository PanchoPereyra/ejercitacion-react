import { useState } from 'react';

// 1. Importamos los componentes estructurales de la landing
import { Hero } from './components/Hero';
import { Navbar, type ExerciseId } from './components/Navbar';
import { Footer } from './components/Footer';

// 2. Importamos el componente de tu ejercicio (Productos)
import { Producto } from './components/Productos';
import Contador from './components/Contador';
import { MostrarOcultar } from './components/MostrarOcultar';
import { Conversion } from './components/Conversion';
import { Compra } from './components/Compra';
import { Buscador } from './components/Buscador';
import { Oferta } from './components/Oferta';
import { Enunciado } from './components/Enunciado';

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState<ExerciseId>(1);

  return (
    // Contenedor general con fondo claro y diseño flexible en columna
    <main className="min-h-screen bg-transparent text-slate-900 flex flex-col justify-between p-4 md:p-8 rounded-lg">

      <div className="max-w-5xl mx-auto w-full">

        <Hero />
        <Navbar
          selectedExercise={selectedExercise}
          onExerciseSelect={setSelectedExercise}
        />

        <section className="bg-white shadow-sm border border-slate-200 p-8 mb-8 rounded-lg">
          <h2 className="text-center text-2xl font-bold text-slate-900 mb-6">
            {selectedExercise === 1 ? 'Ejercicio 1: Productos'
              : selectedExercise === 2 ? 'Ejercicio 2: Contador'
              : selectedExercise === 3 ? 'Ejercicio 3: Mostrar/Ocultar'
              : selectedExercise === 4 ? 'Ejercicio 4: Conversión de Grados'
              : selectedExercise === 5 ? 'Ejercicio 5: Compra'
              : selectedExercise === 6 ? 'Ejercicio 6: Buscador'
              : selectedExercise === 7 ? 'Ejercicio 7: Oferta'
              : 'Enunciado de Ejercicios'}
          </h2>

          {selectedExercise === 1 ? (
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <Producto nombre="Teclado" precio={45000} stock={12} descripcion="Teclado mecánico Genius" />
              <Producto nombre="Mouse" precio={18000} stock={0} descripcion="Mouse inalámbrico Logitech" />
              <Producto nombre="Monitor" precio={320000} stock={3} descripcion="Monitor Samsung 24 pulgadas" />
            </div>
          ) : selectedExercise === 2 ? (
            <Contador />
          ) : selectedExercise === 3 ? (
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
              <h1 className="w-full text-center font-roboto text-3xl text-slate-900 ">
                ¿Qué es JSX?
              </h1>

              <div className="flex flex-wrap justify-center gap-4 font-style: italic text-slate-700">
                <MostrarOcultar significado="Sintaxis que permite escribir estructuras HTML de manera dentro de JavaScript. Se transforma en llamadas a funciones de React." />
              </div>
            </div>
          ) : selectedExercise === 4 ? (
            <div className="flex items-center justify-center bg-slate-50 p-4">
              <Conversion />
            </div>
          ) : selectedExercise === 5 ? (
            <div className="flex  items-center justify-center bg-slate-50 p-4">
              <Compra />
            </div>
          ) : selectedExercise === 6 ? (
            <div className="flex items-center justify-center rounded-lg bg-slate-50 p-4">
              <Buscador />
            </div>
          ) : selectedExercise === 7 ? (
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
          ) : selectedExercise === 8 ? (
            <Enunciado />
          ) : (
            <p className="text-center text-slate-600">
              El ejercicio {selectedExercise} todavía no tiene un componente asignado.
            </p>
          )}
        </section>

      </div>


      <Footer />

    </main>
  );
}