'use client';

import { useEffect } from 'react';

export default function CalendlySection() {

    // Clean up any potential duplicate scripts if navigating around
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);

        return () => {
            // Optional cleanup
        }
    }, []);

    return (
        <section id="calendly" className="bg-black py-24">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                    ¿Listo para escalar?
                </h2>
                <p className="mb-12 text-lg text-gray-400">
                    Selecciona una hora a continuación para hablar de tu estrategia de crecimiento.
                </p>

                <div
                    className="calendly-inline-widget w-full min-w-[320px] h-[750px] bg-white rounded-lg overflow-hidden"
                    data-url="https://calendly.com/"
                    style={{ minWidth: '320px', height: '750px' }}
                />
            </div>
        </section>
    );
}
