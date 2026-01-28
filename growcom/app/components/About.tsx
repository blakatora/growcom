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
                    <p className="text-blue-600 font-bold tracking-widest mb-3 uppercase text-sm">SOBRE NOSOTROS</p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] tracking-tight">
                        Quienes somos
                    </h2>
                    <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
                        <p>
                            En Growcom actuamos como <span className="font-bold text-gray-900">growth partner</span> para marcas de ecommerce que buscan crecimiento inmediato con estructura, control y rentabilidad.
                        </p>
                        <p>
                            Trabajamos junto a los equipos de cada marca para diseñar y ejecutar <span className="font-bold text-gray-900">sistemas de crecimiento 360º</span> que integran adquisición, conversión y retención dentro de una misma estrategia operativa.
                        </p>
                        <p>
                            Nuestro enfoque se basa en la creación de valor, la <span className="font-bold text-gray-900">toma de decisiones basada en datos</span> y la implementación de procesos accionables desde el primer momento.
                        </p>
                        <p>
                            Colaboramos principalmente con <span className="font-bold text-gray-900">marcas de salud, bienestar y suplementación</span> que ya cuentan con tracción y necesitan escalar de forma predecible sin depender de freelancers, agencias tradicionales o acciones aisladas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
