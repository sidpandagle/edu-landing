import Image from "next/image";
import aster from '@/public/company_logos/aster.svg'
import barclays from '@/public/company_logos/barclays.svg'
import flora from '@/public/company_logos/flora.svg'
import godrej from '@/public/company_logos/godrej.svg'
import jpm from '@/public/company_logos/jpm.svg'
import phronesis from '@/public/company_logos/phronesis.png'

export default function Clients() {
    const logos = [
        { src: aster, alt: 'aster' },
        { src: barclays, alt: 'barclays' },
        { src: flora, alt: 'flora' },
        { src: godrej, alt: 'godrej' },
        { src: jpm, alt: 'jpm' },
        { src: phronesis, alt: 'phronesis' },
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
                                    <Image src={logo.src} width={100} height={100} alt={logo.alt} />
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <Image src={logo.src} width={100} height={100} alt={logo.alt} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}
