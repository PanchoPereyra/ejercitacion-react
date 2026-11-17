import { useState } from 'react';

export function Buscador() {
  const [busqueda, setBusqueda] = useState('');

  const lenguajes = ['JavaScript', 'Java', 'Python', 'C++', 'Ruby', 'TypeScript', 'PHP', 'Go'];

  const resultado = lenguajes.filter(function(l) {
    return l.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <div className="p-6">
      <input 
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="border p-2 rounded mb-4"
      />

      <p className="mb-2">{resultado.length} resultados</p>

      <ul className="list-disc pl-5">
        {resultado.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}