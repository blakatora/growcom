import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-4 pt-20 text-center sm:px-6 lg:px-8">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl space-y-8">
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                    LA FÓRMULA GARANTIZADA DE 3 PILARES PARA ESCALAR UNA MARCA DE SALUD Y BIENESTAR A 7/8 CIFRAS EN 2026.
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
                    Fórmula probada escalable que garantiza <span className="font-bold text-gray-900">duplicar la facturación mensual</span> de marcas e-commerce en menos de 90 días.
                </p>

                {/* Video Placeholder */}
                <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl shadow-blue-900/10 group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-600/20">
                            <div className="h-0 w-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[12px] border-b-transparent ml-1"></div>
                            <span className="absolute -inset-4 rounded-full border border-blue-600/30 animate-ping opacity-75"></span>
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-sm text-gray-500">
                        Video explicativo próximamente
                    </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                    <Link
                        href="#calendly"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-blue-500/40"
                    >
                        Reserva una hora
                    </Link>
                </div>
            </div>
        </section>
    );
}
