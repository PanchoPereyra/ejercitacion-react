export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-500 py-8 px-6 text-center text-slate-600 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Nombre del alumno */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="font-semibold text-slate-800">Juan Francisco Pereyra</p>
          <p className="text-xs text-slate-500">Tecnicatura Universitaria en Programación - UTN</p>
        </div>

        {/* Enlaces / Redes */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a 
            href="https://github.com/PanchoPereyra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/juan-francisco-pereyra-596086210/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </a>
      
        </div>

      </div>
    </footer>
  );
}