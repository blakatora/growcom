import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section className="bg-zinc-950 py-24 text-white">
            {/* Quienes Somos */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-500">
                            Quienes somos
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            En GrowCom, nos dedicamos a transformar negocios digitales mediante estrategias probadas.
                            No somos una agencia tradicional; somos tu socio de crecimiento estratégico.
                            Nuestro enfoque se basa en datos, resultados y escalabilidad real.
                        </p>
                        <div className="mt-8">
                            <div className="h-1 w-20 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        {/* Placeholder for Image */}
                        <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl ring-1 ring-white/10 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">Foto del Equipo / Oficina</span>
                        </div>
                    </div>
                </div>

                {/* Sobre Ti */}
                <div className="mt-32 grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="flex justify-center">
                        {/* Placeholder for Personal Image */}
                        <div className="relative h-80 w-80 overflow-hidden rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl ring-1 ring-white/10 flex items-center justify-center">
                            <span className="text-gray-600 font-medium">Tu Foto</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-purple-500">
                            Sobre mi
                        </h2>
                        <div className="mt-6 space-y-6 text-lg leading-8 text-gray-300">
                            <p>
                                Hola, soy xxx . He ayudado a decenas de emprendedores a escalar sus negocios sin depender de las tácticas tradicionales que ya no funcionan.
                            </p>
                            <p>
                                Mi misión es simple: darte la libertad y los ingresos que mereces con un sistema predecible.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="#calendly"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                <span className="mr-2">Agenda tu demo</span>
                                <svg className="w-5 h-5 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
