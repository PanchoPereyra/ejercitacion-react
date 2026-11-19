import { useState } from 'react';

interface ProductoProp {
    significado: string;
}

export function MostrarOcultar({ significado }: ProductoProp) {
    // Crea un estado booleano llamado mostrar que empieza en false, al principio el texto está oculto
    const [mostrar, setMostrar] = useState(false);

    const alternar = () => {
        setMostrar((prev) => !prev);
    };

    return (
        <div className="border border-slate-300 rounded-xl p-5 w-64 bg-white shadow-sm transition-all duration-300 ease-out hover:bg-emerald-50 hover:border-emerald-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
            <button
                type="button"
                onClick={alternar} //ejecuta la función que cambia el estado.
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed text-center w-full"
            >
                {mostrar ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>

            {mostrar && (
                <p className="mt-4 text-slate-700 leading-relaxed">{significado}</p>
            )}
        </div>
    );
}