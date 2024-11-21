import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className='text-zinc-50 text-center'>Has hecho clic {count} veces.</p>

            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
                onClick={() => setCount(count + 1)}
            >
                ¡Haz clic aquí!
            </button>
        </div>
    );
}
