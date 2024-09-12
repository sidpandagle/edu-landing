import Image from "next/image";

export default function Milestones() {
    return (
        <section className="bg-white pt-8"  id="milestones">
            <div className="">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">Milestones</h2>
                <div className="flex justify-center">
                    <p className="lg:mb-8 font-light text-center text-gray-500 sm:text-xl">Learning & Career Path For Data Science Course in Pune at NSARROWS</p>
                </div>
            </div>
            <div className="flex gap-8 flex-col p-8 md:p-4 md:flex-row justify-between mx-auto max-w-screen-lg">
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Enroll at NSARROWS_1.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Join NSARROWS </div>
                        <div className="text-sm text-slate-600">Join NSARROWS for Data Science and Business Analytics Training In Pune with on-job Traning and get a world of opportunities.</div>
                    </div>
                </div>
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Job Oriented Training.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Job Oriented Training</div>
                        <div className="text-sm text-slate-600">Boost your career with our job-oriented data science training, designed to equip you with the latest industry skills and hands-on experience to excel in the data-driven job market.</div>
                    </div>
                </div>
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Work on Real Projects.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Work on Real Projects</div>
                        <div className="text-sm text-slate-600">The Data Science Course at NSARROWS gives you real-world experience through industry-based projects</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 flex-col p-8 md:p-4 md:flex-row justify-between mx-auto max-w-screen-lg">
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Internship from corporate connect.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Internship from corporate connect</div>
                        <div className="text-sm text-slate-600">Take advantage of Corporate Connect internships to boost your Data Science career. Gain industry insights, skills, and network with experts.</div>
                    </div>
                </div>
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Full Time Employability.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Full Time Employability</div>
                        <div className="text-sm text-slate-600">Succeed in your full-time career as a data scientist with NSARROWS. Get expert training and certification in analytics, machine learning, and more!</div>
                    </div>
                </div>
                <div className="rounded-md border overflow-hidden shadow-md md:w-1/3">
                    <img src="/people/Personalized_Men.jpg" className="designer" alt="designer" height={100} width={700}/>
                    <div className="p-4">
                        <div className="text-lg text-black pb-2 font-semibold">Personalized Mentorship</div>
                        <div className="text-sm text-slate-600">Receive one-on-one mentorship from industry professionals who guide you through your learning journey. Benefit from tailored advice, feedback on your projects.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
