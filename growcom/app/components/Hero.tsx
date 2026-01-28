"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

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

                {/* Video Container */}
                <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-100 bg-black shadow-2xl shadow-blue-900/20 group cursor-pointer">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        playsInline
                        preload="metadata"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        controls={isPlaying}
                    >
                        <source src="https://hpo4phjatawerzq0.public.blob.vercel-storage.com/V2.mp4" type="video/mp4" />
                        Tu navegador no soporta el formato de video.
                    </video>

                    {/* Custom Play Overlay */}
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/30"
                            onClick={togglePlay}
                        >
                            <div className="relative flex h-24 w-36 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                                <div className="h-0 w-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                            </div>
                        </div>
                    )}
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
