import { useState } from 'react';

export function Compra() {
  const [items, setItems] = useState<any[]>([]);
  const [texto, setTexto] = useState('');

  const agregar = () => {
    if (texto.trim() === '') return;

    const nuevoItem = {
      id: Date.now(),
      texto: texto
    };

    setItems([...items, nuevoItem]);
    setTexto('');
  };

  const eliminar = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        <input 
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ej: yerba"
          className="border p-2 rounded"
        />
        <button 
          onClick={agregar}
          className="bg-teal-200 border border-teal-700 px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      {items.length === 0 ? (
        <p>No hay nada para comprar</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex items-center gap-2">
              <span>{item.texto}</span>
              <button 
                onClick={() => eliminar(item.id)}
                className="bg-teal-200 border border-teal-700 px-2 py-0.5 text-sm rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}