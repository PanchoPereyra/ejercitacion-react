interface OfertaProps {
  nombre: string;
  precio: number;
  stock: number;
  oferta?: boolean;
}

export function Oferta(props: OfertaProps) {
  return (
    <div className="items-center border border-slate-300 rounded-xl p-5 w-48 bg-white shadow-sm
                 transition-all duration-300 ease-out cursor-pointer
                 hover:bg-emerald-50 hover:border-emerald-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
      <h2 className="font-bold">{props.nombre}</h2>

      {props.oferta && <p className="text-red-500 font-semibold">¡Oferta!</p>}

      <p>${props.precio}</p>

      {props.stock > 0 ? (
        <p>Stock: {props.stock}</p>
      ) : (
        <p className="text-gray-400">Sin stock</p>
      )}
    </div>
  );
}


// interface ProductoProps {
//   nombre: string;
//   precio: number;
//   stock: number;
//   oferta?: boolean;
// }

// export function Producto(props: ProductoProps) {
//   return (
//     <div className="border p-4 rounded w-48">
//       <h2 className="font-bold">{props.nombre}</h2>

//       {props.oferta && <p className="text-red-500 font-semibold">¡Oferta!</p>}

//       <p>${props.precio}</p>

//       {props.stock > 0 ? (
//         <p>Stock: {props.stock}</p>
//       ) : (
//         <p className="text-gray-400">Sin stock</p>
//       )}
//     </div>
//   );
// }