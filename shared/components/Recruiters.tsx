import Image from "next/image";
import AMZN_BIG from '@/public/company_logos/AMZN_BIG.svg'
import CTSH_BIG from '@/public/company_logos/CTSH_BIG.svg'
import DXC_BIG from '@/public/company_logos/DXC_BIG.svg'
import HON_BIG from '@/public/company_logos/HON_BIG.svg'
import IBM from '@/public/company_logos/IBM.svg'
import INFY from '@/public/company_logos/INFY.svg'
import KNEBV from '@/public/company_logos/KNEBV.HE.png'
import LTIM from '@/public/company_logos/LTIM.NS_BIG.svg'
import ORCL_BIG from '@/public/company_logos/ORCL_BIG.svg'
import TCS from '@/public/company_logos/TCS.NS.png'
import TECHM from '@/public/company_logos/TECHM.NS_BIG.svg'
import deloitte_BIG from '@/public/company_logos/deloitte_BIG.svg'

export default function CTA() {
    const logos = [
        { src: AMZN_BIG, alt: 'AMZN_BIG' },
        { src: CTSH_BIG, alt: 'CTSH_BIG' },
        { src: DXC_BIG, alt: 'DXC_BIG' },
        { src: HON_BIG, alt: 'HON_BIG' },
        { src: IBM, alt: 'IBM' },
        { src: INFY, alt: 'INFY' },
        { src: KNEBV, alt: 'KNEBV' },
        { src: LTIM, alt: 'LTIM' },
        { src: ORCL_BIG, alt: 'ORCL_BIG' },
        { src: TCS, alt: 'TCS' },
        { src: TECHM, alt: 'TECHM' },
        { src: deloitte_BIG, alt: 'deloitte_BIG' },
    ]
    return (
        <section className="bg-white" id="contact-us">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Our Trusted Recruiters</h2>
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
