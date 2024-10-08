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
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">Our Clients</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Partnering with leading companies to connect you with exciting career opportunities.</p>
                </div>
                <main className="py-8">
                    <div className="flex md:flex-row flex-col items-center justify-center gap-16">
                        {logos.map((logo, index) => (
                            <div key={index}>
                                <img src={logo.src} width={100} height={100} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}
