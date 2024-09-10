import Image from "next/image";
// import aster from '@/public/company_logos/aster.svg'
// import barclays from '@/public/company_logos/barclays.svg'
// import flora from '@/public/company_logos/flora.svg'
// import godrej from '@/public/company_logos/godrej.svg'
// import jpm from '@/public/company_logos/jpm.svg'
// import phronesis from '@/public/company_logos/phronesis.png'

export default function Clients() {
    const logos = [
        { src: '/company_logos/aster.svg', alt: 'aster' },
        { src: '/company_logos/barclays.svg', alt: 'barclays' },
        { src: '/company_logos/flora.svg', alt: 'flora' },
        { src: '/company_logos/godrej.svg', alt: 'godrej' },
        { src: '/company_logos/jpm.svg', alt: 'jpm' },
        { src: '/company_logos/phronesis.png', alt: 'phronesis' },
    ]
    return (
        <section className="bg-white" id="recruiters">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Our Clients</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Partnering with leading companies to connect you with exciting career opportunities.</p>
                </div>
                <main className="relative py-8 flex flex-col justify-center overflow-hidden">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <img src={logo.src} width={100} height={100} alt={logo.alt} />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <img src={logo.src} width={100} height={100} alt={logo.alt} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}
