import Image from "next/image";

export default function Skills() {
    const logos = [
        { src: '/icons/analysis.svg', alt: 'analysis', title: 'Data Visualization' },
        { src: '/icons/chart.svg', alt: 'chart', title: 'Statistics' },
        { src: '/icons/deep-learning.svg', alt: 'deepLearning', title: 'Deep Learning' },
        { src: '/icons/forecast.svg', alt: 'forecast', title: 'Forecasting' },
        { src: '/icons/intersect.svg', alt: 'intersect', title: 'Ensemble Learning' },
        { src: '/icons/machine-learning.svg', alt: 'machineLearning', title: 'Machine Learning' },
        { src: '/icons/natural-language-processing.svg', alt: 'naturalLanguageProcessing', title: 'Natural Language Processing' },
        { src: '/icons/research.svg', alt: 'research', title: 'Data Analysis' },
    ]
    return (
        <section className="bg-white" id="skills">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">Skills</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Comprehensive training on essential data science skills for real-world applications.</p>
                </div>
                <main className="relative py-8 flex md:flex-row flex-col justify-center overflow-hidden mx-auto max-w-screen-lg">
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
                        {logos.map((logo, index) => (
                            <div key={index}>
                                <div className="flex flex-col text-center items-center justify-center">
                                    <img src={logo.src} width={80} height={80} alt={logo.alt} />
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
