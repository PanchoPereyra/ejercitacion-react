import { Conversion } from './components/Conversion';

export function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Conversion />
    </main>
  );
}

export default App;





// import { Conversion } from "./components/Conversion";
// import { useState } from "react";

// export default function App() {
//   const [grados, setGrados] = useState<string>("");

//   return (
//     <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
//       <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//         <h1 className="w-full text-center text-3xl text-slate-900">
//           Grados ºC a ºF
//         </h1>

//         <label htmlFor="celsius" className="w-full">
//           <span className="mb-1 block">Grados Celsius:</span>
//           <input
//             id="celsius"
//             type="number"
//             step="any"
//             value={grados}
//             onChange={(event) => setGrados(event.currentTarget.value)}
//             placeholder="Ingresá los grados Celsius"
//             className="w-full rounded-lg border border-slate-300 px-3 py-2"
//           />
//         </label>

//         <Conversion grados={grados} />
//       </div>
//     </main>
//   );
// } 