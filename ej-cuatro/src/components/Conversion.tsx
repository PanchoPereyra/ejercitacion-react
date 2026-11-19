import { useState } from 'react';

export function Conversion() {
    const [celsius, setCelsius] = useState<string>('');

    const numericCelsius = Number(celsius);
    const isValidNumber = celsius.trim() !== '' && !Number.isNaN(numericCelsius);
    const fahrenheit = isValidNumber ? (numericCelsius * 9) / 5 + 32 : 32;

    return (
        <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            {/* <div className="w-full max-w-md bg-white p-6 shadow-sm">
                <h1 className="w-full text-center text-3xl text-slate-900">
                    Conversión de grados ºC a ºF
                </h1>
            </div> */}

            <div className="flex flex-col items-center gap-2">
                <label  className="text-2xl text-slate-900">
                    Grados Celsius
                </label>
                <input
                    id="celsius-input"
                    type="number"
                    value={celsius}
                    onChange={(e) => setCelsius(e.target.value)}
                    placeholder="Ingresá °C (ej: 35)"
                    className="w-64 rounded-lg border border-slate-300 px-4 py-2.5 text-lg text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
            </div>

            <p className="text-4xl font-bold tracking-tight text-slate-900">
                {fahrenheit.toFixed(1)} °F
            </p>

            {isValidNumber && numericCelsius > 25 && (
                <p className="rounded-lg border border-red-500 bg-red-100 p-3 text-base font-medium text-slate-700 shadow-sm">
                    Hace calor
                </p>
            )}
        </div>
    );
}