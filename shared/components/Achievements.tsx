import Image from "next/image";

export default function Achievements() {
    return (
        <section className="text-neutral bg-white">
            <div className=" flex gap-8 md:flex-row items-center justify-center text-neutral py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                <div className="flex gap-8 flex-col md:flex-row justify-between">
                    <div className="rounded-md border overflow-hidden shadow-md">
                        <img src="/designer.jpg" className="designer"/>
                        <div className="p-4">
                            <div className="text-lg text-black pb-2 font-semibold">100% Guaranteed Internship </div>
                            <div className="text-sm text-slate-600">Our program ensures that every participant secures an internship, providing invaluable hands-on experience and a chance to apply theoretical knowledge in real-world settings, setting you up for future success.</div>
                        </div>
                    </div>
                    <div className="rounded-md border overflow-hidden shadow-md">
                        <img src="/designer.jpg" className="designer"/>
                        <div className="p-4">
                            <div className="text-lg text-black pb-2 font-semibold">360° Career Support</div>
                            <div className="text-sm text-slate-600">Enjoy holistic career support that includes personalized coaching, resume reviews, interview preparation, and networking opportunities. We equip you with the tools and guidance necessary to navigate the job market confidently.</div>
                        </div>
                    </div>
                    <div className="rounded-md border overflow-hidden shadow-md">
                        <img src="/designer.jpg" className="designer"/>
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
