import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20 text-center sm:px-6 lg:px-8">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl space-y-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 sm:text-6xl md:text-7xl">
                    Fórmula garantizada de 3 pasos para escalar tu negocio
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
                    De xxxx a 7/8 cifras en 2026 sin depender de Facebook ads, agencias o influencers.
                </p>

                {/* Video Placeholder */}
                <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl shadow-blue-900/20 group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20">
                            <div className="h-0 w-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                            <span className="absolute -inset-4 rounded-full border border-white/30 animate-ping opacity-75"></span>
                        </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-sm text-gray-400">
                        Video explicativo próximamente
                    </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                    <Link
                        href="#calendly"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/50"
                    >
                        Reserva una hora
                    </Link>
                </div>
            </div>
        </section>
    );
}
