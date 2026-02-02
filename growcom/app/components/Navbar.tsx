"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="relative w-full bg-white pt-3 pb-3 md:py-8 md:border-b border-gray-50 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo-light.png"
                        alt="Growcom Logo"
                        width={468}
                        height={148}
                        className="h-32 md:h-24 w-auto"
                        priority
                        quality={100}
                    />
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="#about" className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-blue-600 transition-colors">
                        Sobre nosotros
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-blue-600 transition-colors">
                        Cómo funciona
                    </Link>
                    <Link
                        href="#calendly"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#464189] px-8 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:bg-[#37E693]"
                    >
                        Reserva una hora
                    </Link>
                </div>
            </div>
        </nav>
    );
}
