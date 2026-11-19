import { useState } from 'react';

export default function Contador() {
  const [valor, setValor] = useState<number>(0); 

  const incrementar = () => {
    if (valor < 10) {
      setValor(valor + 1);
    }
  };

  const decrementar = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };

  const reiniciar = () => {
    setValor(0);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 rounded-xl border border-gray-200 p-6 text-center shadow-md bg-white">
      
      {/* VISUALIZACIÓN DEL NÚMERO */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{valor}</h2>


      {/* CONTROLES DE CANTIDAD */}
      {/* Decrementar */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          type="button"
          // deshabilita el botón si 'valor' es igual a 0 para que no se vaya a los numeros negativos
          disabled={valor === 0}
          onClick={decrementar}
          className="bg-red-500 hover:bg-red-600 text-white font-bold w-18 h-10 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
          // className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold px-5 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          -
        </button>

        {/* Incrementar */}
        <button
          type="button"
          // deshabilita si el valor es igual a 10 para no pasarse de 10
          disabled={valor === 10}
          onClick={incrementar}
          className="bg-green-500 hover:bg-green-600 text-white font-bold w-18 h-10 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
          // className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold px-5 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          +
        </button>


        {/* Reiniciar */}
        <button
          type="button"
          onClick={reiniciar}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-18 h-10 rounded-lg transition"
        >
          Reiniciar
        </button>
      </div>

      {/* MENSAJES DE LÍMITE */}
      {/* Máximo */}
      {valor === 10 && (
        <p className="text-sm text-gray-500 mt-2 font-style: italic">Llegaste al máximo</p>
      )}
      {/* Mínimo */}
      {valor === 0 && (
        <p className="text-sm text-gray-500 mt-2 font-style: italic">Llegaste al mínimo</p>
      )}
    </div>
  );
}





// import { useState } from 'react';

// export default function ProductCard() {
//   const [cantidad, setCantidad] = useState(0);

//   return (
//     <div className="max-w-xs mx-auto mt-10 rounded-xl border border-gray-200 p-6 text-center shadow-md bg-white">
//       <h3 className="text-xl font-bold text-gray-800">Valor</h3>
//       {/* <h4 className="text-lg font-semibold text-green-600 my-1">$xxxx</h4>
//       <p className="text-sm text-gray-500 mb-4">Descripción del producto en cuestión</p>
//       <h4 className="font-medium text-gray-700 mb-2">Stock</h4> */}

//       <div className="flex items-center justify-center gap-4 my-4">
//         <span className="text-3xl font-bold w-8 text-center">{cantidad}</span>
//       </div>

//       {/* Controles de cantidad */}
//       <div className="flex items-center justify-center gap-4 my-4">
//         <button
//           type="button"
//           className="bg-red-500 hover:bg-red-600 text-white font-bold w-18 h-10 rounded-lg transition"
//           onClick={() => setCantidad((prev) => (prev > 0 ? prev - 1 : 0))}
//         >
//           -
//         </button>

//         <button
//           type="button"
//           className="bg-green-500 hover:bg-green-600 text-white font-bold w-18 h-10 rounded-lg transition"
//           onClick={() => setCantidad((prev) => prev + 1)}
//         >
//           +
//         </button>

//         <button
//           type="button"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-18 h-10 rounded-lg transition"
//           onClick={() => setCantidad((prev) => prev + 1)}
//         >
//           Reiniciar
//         </button>
//       </div>

//     </div>
//   );
// }