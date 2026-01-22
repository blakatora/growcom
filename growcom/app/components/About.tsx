export default function About() {
    return (
        <section className="text-gray-900 border-t border-gray-100">
            {/* Quienes Somos */}
            <div className="relative py-24 bg-white overflow-hidden">
                {/* Background Blobs similar to Hero */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-600">
                        Quienes somos
                    </h2>
                    <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
                        <p>
                            En Growcom no trabajamos como una agencia ni como un freelance.
                            Somos <span className="font-bold text-gray-900">Growth Partners</span>: entramos en el negocio como socios de crecimiento y nos hacemos responsables del resultado.
                        </p>
                        <p>
                            Nuestro enfoque se basa en una <span className="font-bold text-gray-900">fórmula de crecimiento probada</span>.
                            Primero generamos <span className="font-bold text-gray-900">contenido viral para captar atención real</span>.
                            Después desarrollamos <span className="font-bold text-gray-900">contenido de alto valor</span>, adaptado a cada producto y a cada marca, porque no todos los e-commerce funcionan igual.
                            And, solo entonces, construimos una <span className="font-bold text-gray-900">oferta de adquisición perfectamente estructurada</span> para convertir esa atención en clientes.
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
            </div>
        </section>
    );
}
