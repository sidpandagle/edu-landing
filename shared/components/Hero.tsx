import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex gap-8 md:flex-row items-center justify-center text-neutral py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <div className="md:w-1/2 h-full">
                <div className=" text-3xl font-extrabold pb-4">
                    Data Science and Business Analytics Course in Pune for FRESH MINDS
                </div>
                <div>
                    In Association with:
                    <img className="rounded-md h-12 -translate-x-2" src={"/nasscom.jpg"} alt="designerimage" />

                    <span className="text-xs italic">National Association of Software and Service Companies</span>
                </div>
                <div className="text-lg pt-4">
                    <span className=" font-extrabold"> Guaranteed internship with on-job training </span>
                    {/* with 100% placement assurance,  */}
                    offering hands-on experience and career opportunities in your chosen field.
                </div>
            </div>
            <img className="md:w-1/2 hidden h-[300px] object-cover object-top md:block rounded-md" src={"/collegegirl.jpg"} alt="designerimage" />
        </section>

    );
}
