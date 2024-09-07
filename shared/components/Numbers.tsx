import Image from "next/image";

export default function Numbers() {
    return (
        <section className="text-white bg-neutral">
            <div className=" flex gap-8 md:flex-row items-center justify-center  py-8 px-4 mx-auto max-w-screen-xl">
                <div className="flex gap-8 flex-col md:flex-row justify-between">
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">10k+</div>
                            <div className="text-sm text-center">Students Enrolled </div>
                        </div>
                    </div>
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">4.9</div>
                            <div className="text-sm text-center">Google Reviews</div>
                        </div>
                    </div>
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">6</div>
                            <div className="text-sm text-center">Months Course <br /> <span className="text-xs">(Online / Offline)</span></div>
                        </div>
                    </div>
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">250+</div>
                            <div className="text-sm text-center">Hours of Training</div>
                        </div>
                    </div>
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">50+</div>
                            <div className="text-sm text-center">Hands on projects</div>
                        </div>
                    </div>
                    <div className="rounded-lg  overflow-hidden ">
                        <div className="p-4">
                            <div className="text-5xl text-center pb-2 font-bold">20+</div>
                            <div className="text-sm text-center">Organizations Trained</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
