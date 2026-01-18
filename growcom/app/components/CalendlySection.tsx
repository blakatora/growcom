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
        <section id="calendly" className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                    ¿Listo para escalar?
                </h2>
                <p className="mb-12 text-lg text-gray-600">
                    Selecciona una hora a continuación para hablar de tu estrategia de crecimiento.
                </p>

                <div
                    className="calendly-inline-widget w-full min-w-[320px] h-[750px] rounded-lg overflow-hidden"
                    data-url="https://calendly.com/pepelora-growcom/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&locale=es" style={{ minWidth: '320px', height: '1000px' }}
                />
            </div>
        </section>
    );
}
