export function Hero() {
  return (
    <section className="relative text-white py-16 px-6 mb-8 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-700/75 overflow-hidden rounded-">

  {/* Imagen de fondo tenue */}
  <div 
    className="absolute inset-0 z-0 opacity-[1.00]" 
    style={{
      backgroundImage: "url('/img/foto-facultad.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  />

      
      <div className="absolute inset-0 z-0 bg-zinc-800/75"></div>


      {/* 3. CONTENIDO PRINCIPAL (z-10 para que quede por encima del fondo) */}
      {/* Columna izquierda: Textos principales */}
      <div className="space-y-4 max-w-xl relative z-10">
        <span className="text-white text-xs font-semibold  py-1">
          UNIVERSIDAD TECNOLOGICA NACIONAL - FACULTAD REGIONAL PARANÁ
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Programación IV
        </h1>

        <p className="text-lg md:text-xl font-medium text-white">
          Trabajo Práctico Integrador: Ejercicios prácticos de React
        </p>

        <p className="text-zinc-400 text-sm md:text-base italic">
          Desarrollo de componentes interactivos, manejo de estados, filtrados dinámicos, consumo de APIs y tipado estricto con TypeScript implementados en Vite y Tailwind CSS.
          Cada ejercicio se puede resolver en JavaScript ( App.jsx ) o en TypeScript ( App.tsx ). El código inicial
          de cada uno está en la página interactiva de la clase.
        </p>

        <p className="text-zinc-300 text-sm md:text-base italic ">
          <span className="font-semibold underline">Profesor: </span> Mariano Princic <br />
          <span className="font-semibold underline">Alumno: </span> Juan Francisco Pereyra
        </p>
      </div>

      {/* Columna derecha: Logo UTN */}
      {/* <div className="flex-shrink-0 relative z-10">
        <img
          src="/img/logo-utn-4.jpg"  
          alt="Logo UTN Facultad Regional Paraná"
          className="rounded-xl h-20 md:h-40 object-contain shadow-md" 
        />
      </div> */}

    </section>
  );
}