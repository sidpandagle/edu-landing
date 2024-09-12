import Image from "next/image";

export default function CTA() {
    return (
        <section className="bg-white" id="market-analysis">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">Market Analysis</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Data science market analysis in 2024 and job opportunities with salaries offered</p>
                </div>
                <div className="space-y-8 flex flex-col md:flex-row gap-8 items-end">
                    <img src="/g1.png" className="md:w-1/2" alt="g1" height={400} width={400} />
                    <img src="/g2.png" className="md:w-1/2" alt="g2" height={400} width={400} />
                </div>
                <div className="mt-8">
                The bar chart illustrates the average annual salaries for various data-related roles in India, showing that salaries increase with seniority and specialization. Lead Data Scientists earn the most, while Data Analysts earn the least.
                </div>
            </div>
        </section>
    );
}
