"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden bg-white px-4 pt-6 md:pt-16 pb-20 text-center sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-6 md:space-y-12">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mt-0 mb-4 md:mb-10 uppercase">
          LA FÓRMULA GARANTIZADA DE 3 PILARES PARA ESCALAR UNA MARCA DE E-COMMERCE A 7/8 CIFRAS EN 2026.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
          Fórmula probada escalable que garantiza{" "}
          <span className="font-bold text-gray-900">duplicar la facturación mensual</span> de marcas e-commerce en menos de 90 días.
        </p>

        {/* Video Container (YouTube) */}
        <div className="relative mx-auto aspect-video w-full max-w-7xl overflow-hidden rounded-3xl border border-gray-100 bg-black shadow-2xl shadow-blue-900/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sOUkOtq9kyY?rel=0&modestbranding=1"
            title="Growcom video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            href="#calendly"
            className="inline-flex h-16 items-center justify-center rounded-full bg-[#464189] px-10 text-lg font-black uppercase tracking-widest text-white shadow-2xl shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-[#37E693] hover:shadow-[#37E693]/40"
          >
            Reserva una hora
          </Link>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 9122040 (Actualiza Hero para usar video de YouTube)
