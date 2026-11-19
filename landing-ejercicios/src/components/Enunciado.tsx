export function Enunciado() {
  return (
    <div className="w-full">
      <iframe
        src={`${import.meta.env.BASE_URL}doc/practica-react.pdf`}
        title="Enunciado de los ejercicios"
        className="w-full h-[75vh] rounded-lg border border-slate-200"
      />
    </div>
  );
}
