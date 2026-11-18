export type ExerciseId = 1 | 2 | 3 | 4 | 5 | 6 | 7| 8;

interface NavbarProps {
  selectedExercise: ExerciseId;
  onExerciseSelect: (exercise: ExerciseId) => void;
}

const exercises = [
  { id: 1, title: "Enunciado\nEjercicios" },
  { id: 2, title: "Ejercicio 1\nProducto" },
  { id: 3, title: "Ejercicio 2\nContador" },
  { id: 4, title: "Ejercicio 3\nMostrar/Ocultar" },
  { id: 5, title: "Ejercicio 4\nConversión de Grados" },
  { id: 6, title: "Ejercicio 5\nCompra" },
  { id: 7, title: "Ejercicio 6\nBuscador" },
  { id: 8, title: "Ejercicio 7\nOferta" },
];

export function Navbar({ selectedExercise, onExerciseSelect }: NavbarProps) {
  return (
    <nav className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 flex flex-row flex-wrap items-center justify-center gap-2 mb-8">
      {exercises.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onExerciseSelect(item.id as ExerciseId)}
          // Agregamos 'whitespace-pre-line' y centramos el texto con 'text-center'
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center whitespace-pre-line leading-tight ${
            selectedExercise === item.id
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}