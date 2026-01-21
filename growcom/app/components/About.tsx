import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section className="bg-gray-50 py-24 text-gray-900">
            {/* Quienes Somos */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600">
                            Quienes somos
                        </h2>
                        <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
                            <p>
                                En Growcom no trabajamos como una agencia ni como un freelance.
                                Somos <span className="font-bold text-gray-900">Growth Partners</span>: entramos en el negocio como socios de crecimiento y nos hacemos responsables del resultado.
                            </p>
                            <p>
                                Nuestro enfoque se basa en una <span className="font-bold text-gray-900">fórmula de crecimiento probada</span>.
                                Primero generamos <span className="font-bold text-gray-900">contenido viral para captar atención real</span>.
                                Después desarrollamos <span className="font-bold text-gray-900">contenido de alto valor</span>, adaptado a cada producto y a cada marca, porque no todos los e-commerce funcionan igual.
                                Y, solo entonces, construimos una <span className="font-bold text-gray-900">oferta de adquisición perfectamente estructurada</span> para convertir esa atención en clientes.
                            </p>
                            <p>
                                Todo esto se apoya en <span className="font-bold text-gray-900">sistemas de automatización digital</span> que nos permiten escalar la captación, optimizar la conversión y aumentar la retención de clientes en el tiempo.
                            </p>
                            <p>
                                Trabajamos con un <span className="font-bold text-gray-900">modelo 360</span>, lo que significa que no nos limitamos a una plataforma ni a servicios concretos.
                                Analizamos y activamos todos los puntos clave del crecimiento del negocio, integrando estrategia, contenido, adquisición y retención dentro de un mismo sistema.
                            </p>
                            <p>
                                Nuestra forma de fijar precios también es diferente:
                                no cobramos por tareas, cobramos por <span className="font-bold text-gray-900">valor generado</span>, y en muchos casos trabajamos a <span className="font-bold text-gray-900">comisión</span>, alineando nuestros intereses con los del negocio.
                            </p>
                            <p>
                                Si Growcom crece, es porque tu e-commerce crece.
                                Ese es nuestro modelo.
                                Y esa es nuestra diferencia.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        {/* Placeholder for Image */}
                        <div className="relative h-64 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Foto del Equipo / Oficina</span>
                        </div>
                    </div>
                </div>

                {/* Sobre Ti */}
                <div className="mt-32 grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="flex justify-center">
                        {/* Real Image of Pepe */}
                        <div className="relative h-96 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5">
                            <Image
                                src="/pepe.jpg"
                                alt="Foto de Pepe"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-indigo-600">
                            Sobre mi
                        </h2>
                        <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
                            <p>
                                Hola, soy Pepe. He ayudado a decenas de emprendedores a estructurar sus negocios para el crecimiento sostenible, alejándonos del caos operativo.
                            </p>
                            <p>
                                Mi misión es desarrollar la infraestructura que tu negocio necesita para escalar sin que ello sacrifique tu calidad de vida.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="#calendly"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-50"
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
