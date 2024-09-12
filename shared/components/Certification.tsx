import Image from "next/image";

export default function Certification() {
    return (
        <section className="bg-white" id="certification">
            <div className="pt-8 lg:pt-8 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-center text-gray-900">Certification</h2>
                <div className="flex justify-center">
                    <p className="lg:mb-4 font-light text-center text-gray-500 sm:text-xl">Earn a certification that is recognized by industry leaders</p>
                </div>
                <div className="space-y-8 flex justify-center items-center">
                    <img src="/certificate.png" alt="certificate" height={400} width={600} />
                </div>
            </div>
        </section>
    );
}
