import React from "react";

const steps = [
    {
        number: "1",
        title: "paso 1",
        description:
            "Captación de atención, ya sea orgánica o mediante tráfico pagado, dirigida a un embudo de ventas apoyado en contenido de alto valor y creatividades virales.",
        items: [
            { text: "Embudo De Venta Alto Valor", icon: "filter" },
            { text: "Captación De Trafico", icon: "users" },
            { text: "Creatividades Virales", icon: "sparkles" },
        ],
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        number: "2",
        title: "paso 2",
        description:
            "Creación de un sistema para convertir esa atención en ventas, utilizando ofertas de adquisición ganadoras.",
        items: [
            { text: "Oferta De Adquisición Ganadora", icon: "star" },
            { text: "Sistema De Conversion De Trafico", icon: "refresh" },
        ],
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        number: "3",
        title: "paso 3",
        description:
            "Desarrollo de un proceso posventa para aumentar el valor de vida de cada cliente mediante el uso de marketing por email.",
        items: [
            { text: "Dominio De Marketing Por Email", icon: "mail" },
            { text: "Resultados Garantizados", icon: "user-check" },
        ],
        gradient: "from-pink-500 to-rose-500",
    },
];

const Icon = ({ name }: { name: string }) => {
    switch (name) {
        case "filter":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            );
        case "users":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case "sparkles":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            );
        case "star":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            );
        case "refresh":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            );
        case "mail":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case "user-check":
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            );
        default:
            return null;
    }
};

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">¿CÓMO FUNCIONA?</p>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1E3A8A] tracking-tight">Los Tres Pasos</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-blue-100 hidden md:block"></div>

                    <div className="space-y-16 md:space-y-20">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">

                                    {/* Center Badge (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-blue-50 group transition-all duration-500 hover:scale-110 hover:border-blue-100">
                                            <span className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br ${step.gradient}`}>
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mobile Badge */}
                                    <div className="md:hidden mb-8 z-10">
                                        <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-blue-50">
                                            <span className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br ${step.gradient}`}>
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Column 1 */}
                                    <div className={`w-full md:w-[42%] flex flex-col ${isEven ? "md:items-start md:text-left" : "order-2 md:order-1 items-start text-left md:mt-0 mt-8"}`}>
                                        {isEven ? (
                                            <div className="space-y-4">
                                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4 w-full">
                                                {step.items.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 group">
                                                        <div className="flex-shrink-0 p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                            <Icon name={item.icon} />
                                                        </div>
                                                        <span className="text-gray-700 font-bold text-base md:text-lg">{item.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Column 2 */}
                                    <div className={`w-full md:w-[42%] flex flex-col ${!isEven ? "md:items-start md:text-left md:mt-0 mt-8" : "order-1 md:order-2 md:mt-0 mt-8 items-start text-left"}`}>
                                        {!isEven ? (
                                            <div className="space-y-4">
                                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4 w-full">
                                                {step.items.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 group">
                                                        <div className="flex-shrink-0 p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                            <Icon name={item.icon} />
                                                        </div>
                                                        <span className="text-gray-700 font-bold text-base md:text-lg">{item.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
