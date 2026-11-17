// 1. Definición de la interfaz (El contrato de TypeScript)
// Le indica a TS qué propiedades son obligatorias y de qué tipo de dato deben ser.
// Si en App.tsx intentás pasar un texto en 'precio' o te olvidás de 'stock', TS marcará un error antes de compilar.
interface ProductoProp {
    nombre: string;
    precio: number;
    stock: number;
    descripcion: string; // Propiedad opcional (puede o no estar presente)
}

// 2. Firma del componente y desestructuración tipada
// Usamos 'export function' (exportación nombrada) para importarlo luego con llaves { Producto }.
// Desestructuramos { nombre, precio, stock, descripcion } directamente en los parámetros y les asignamos el tipo ': ProductoProps'.
export function Producto({ nombre, precio, stock, descripcion }: ProductoProp) {
    return (

        

        // 3. Contenedor de la tarjeta con clases de Tailwind:
        <div
            className="border border-slate-300 rounded-xl p-5 w-48 bg-white shadow-sm
                 transition-all duration-300 ease-out cursor-pointer
                 hover:bg-emerald-50 hover:border-emerald-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
        >          

            {/* 4. Interpolación de variables: las llaves {} permiten insertar código JS/TS dentro del JSX */}
            <h3 className="font-bold text-lg text-slate-900 mb-1">{nombre}</h3>
            <p className="text-slate-700 mb-4 font-style: italic">{descripcion}</p>
            <p className="text-slate-700 mb-4">${precio}</p>

            {/* 5. Renderizado condicional con operador ternario:
          Evalúa si 'stock === 0' es verdadero (?). Si lo es, renderiza el primer bloque.
          Si es falso (:), renderiza el segundo bloque con la cantidad. */}
            {stock === 0 ? (
                <p className="text-slate-400">Sin stock</p>
            ) : (
                <p className="text-slate-700 leading-snug">
                    Stock: {stock} <br />
                    unidades
                </p>
            )}
        </div>
    );
}