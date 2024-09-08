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

export default function Skills() {
    const logos = [
        { src: analysis, alt: 'analysis', title: 'Data Analysis' },
        { src: chart, alt: 'chart', title: 'Statistics' },
        { src: deepLearning, alt: 'deepLearning', title: 'Deep Learning' },
        // { src: deepLearning1, alt: 'deepLearning1', title: 'deepLearning1' },
        { src: forecast, alt: 'forecast', title: 'Forecasting' },
        // { src: forecast1, alt: 'forecast1', title: 'forecast1' },
        // { src: forecastAnalytics, alt: 'forecastAnalytics', title: 'forecastAnalytics' },
        { src: intersect, alt: 'intersect', title: 'Ensemble Learning' },
        { src: machineLearning, alt: 'machineLearning', title: 'Machine Learning' },
        { src: naturalLanguageProcessing, alt: 'naturalLanguageProcessing', title: 'Natural Language Processing' },
        { src: research, alt: 'research', title: 'Market Analysis' },
    ]
    return (
        <section className="bg-white" id="skills">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Skills</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Comprehensive training on essential data science skills for real-world applications.</p>
                </div>
                <main className="relative py-8 flex md:flex-row flex-col justify-center overflow-hidden mx-auto max-w-screen-lg">
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
                        {logos.map((logo, index) => (
                            <div key={index}>
                                <div className="flex flex-col text-center items-center justify-center">
                                    <Image src={logo.src} width={80} height={80} alt={logo.alt} />
                                    <div className="mt-2">{logo.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}
