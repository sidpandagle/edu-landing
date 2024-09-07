import Image from "next/image";
import analysis from '@/public/icons/analysis.svg'
import chart from '@/public/icons/chart.svg'
import deepLearning from '@/public/icons/deep-learning.svg'
import deepLearning1 from '@/public/icons/deep-learning(1).svg'
import forecast from '@/public/icons/forecast.svg'
import forecast1 from '@/public/icons/forecast(1).svg'
import forecastAnalytics from '@/public/icons/forecast-analytics.svg'
import intersect from '@/public/icons/intersect.svg'
import machineLearning from '@/public/icons/machine-learning.svg'
import naturalLanguageProcessing from '@/public/icons/natural-language-processing.svg'
import research from '@/public/icons/research.svg'

export default function SkillsCovered() {
    const logos = [
        { src: analysis, alt: 'analysis', title: 'Data Analysis' },
        { src: chart, alt: 'chart', title: 'Chart' },
        { src: deepLearning, alt: 'deepLearning', title: 'Deep Learning' },
        // { src: deepLearning1, alt: 'deepLearning1', title: 'deepLearning1' },
        { src: forecast, alt: 'forecast', title: 'Forecast' },
        // { src: forecast1, alt: 'forecast1', title: 'forecast1' },
        // { src: forecastAnalytics, alt: 'forecastAnalytics', title: 'forecastAnalytics' },
        { src: intersect, alt: 'intersect', title: 'Ensemble Learning' },
        { src: machineLearning, alt: 'machineLearning', title: 'Machine Learning' },
        { src: naturalLanguageProcessing, alt: 'naturalLanguageProcessing', title: 'Natural Language Processing' },
        { src: research, alt: 'research', title: 'Research' },
    ]
    return (
        <section className="bg-white" id="recruiters">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Skills Covered</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Comprehensive training on essential data science skills for real-world applications.</p>
                </div>
                <main className="relative py-8 flex flex-col justify-center overflow-hidden">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <div className="flex flex-col text-center items-center justify-center">
                                        <Image src={logo.src} width={100} height={100} alt={logo.alt} />
                                        {logo.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {logos.map((logo, index) => (
                                <li key={index}>
                                    <div className="flex flex-col items-center justify-center">
                                        <Image src={logo.src} width={100} height={100} alt={logo.alt} />
                                        {logo.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}
