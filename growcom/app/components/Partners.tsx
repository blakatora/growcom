export default function Partners() {
    const brands = [
        "TechFlow",
        "ScaleUp",
        "FutureVision",
        "DataPeak",
        "NextLevel",
    ];

    return (
        <section className="border-y border-white/5 bg-black py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Empresas que confían en nosotros
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="group flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 cursor-default"
                        >
                            <span className="text-2xl font-bold text-gray-700 transition-colors group-hover:text-white">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
