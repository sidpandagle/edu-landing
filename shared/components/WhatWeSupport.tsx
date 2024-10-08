import Image from "next/image";

export default function WhatWeSupport() {
    return (
        <section className="text-neutral bg-white" id="whatwesupport">
            <h2 className="pt-8 text-3xl tracking-tight font-extrabold text-center text-gray-900">What We Support</h2>
            <div className=" flex gap-8 md:flex-row items-center justify-center text-neutral py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-12">
                <div className="flex gap-8 flex-col md:flex-row justify-between">
                    <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                        <img src="/people/guaranteed.jpg" className="object-cover h-48 w-full object-top" alt="guaranteed" height={100} width={400} />
                        <div className="p-4">
                            <div className="text-lg text-black pb-2 font-semibold">100% Guaranteed Internship </div>
                            <div className="text-sm text-slate-600">Secure your future with our data science and business analytics course in Pune. Every participant gets a 100% guaranteed internship, offering hands-on experience and a path to becoming a data scientist. Connect with industry people and gain practical knowledge.</div>
                        </div>
                    </div>
                    <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                        <img src="/people/360career.jpg" className="object-cover h-48 w-full" alt="360career" height={100} width={400} />
                        <div className="p-4">
                            <div className="text-lg text-black pb-2 font-semibold">360° Career Support</div>
                            <div className="text-sm text-slate-600">Enjoy holistic career support that includes personalized coaching, resume reviews, interview preparation, and networking opportunities. We equip you with the tools and guidance necessary to navigate the job market confidently.</div>
                        </div>
                    </div>
                    <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                        <img src="/people/learner.jpg" className="object-cover h-48 w-full object-top" alt="learner" height={100} width={400} />
                        <div className="p-4">
                            <div className="text-lg text-black pb-2 font-semibold">30,000+ Learners</div>
                            <div className="text-sm text-slate-600">Join a vibrant community of over 30,000 learners who have transformed their careers through our comprehensive courses. Connect, collaborate, and grow together as you pursue your professional goals.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
