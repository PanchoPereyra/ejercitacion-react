interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
  oferta?: boolean;
}

export function Producto(props: ProductoProps) {
  return (
    <div className="border p-4 rounded w-48">
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