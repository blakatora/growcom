import Image from "next/image";

const partners = [
    { name: "Meta Business Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Shopify Partners", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Klaviyo Partner", logo: "/partners/klaviyo.png" },
    { name: "Zapier", logo: "/partners/zapier.png" },
    { name: "E-com Growth Partners", logo: "/partners/ecom-growth.jpg" },
    { name: "AGEFIT", logo: "/partners/agefit.png" },
];

export default function Partners() {
    return (
        <section className="bg-white py-12 border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div>
                        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-blue-600 mb-8">
                            Nuestros Partners
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                            {partners.map((partner) => (
                                <div
                                    key={partner.name}
                                    className="flex items-center justify-center"
                                >
                                    <div className={`relative ${partner.name === "E-com Growth Partners" ? "h-14 w-36 md:h-16 md:w-44" : "h-10 w-28 md:h-12 md:w-36"}`}>
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

