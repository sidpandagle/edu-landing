import Image from "next/image";

export default function Testimonials() {
    return (

        <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">Here's why we're the best in Pune for Data Science</p>
                </div>
                <section className="bg-white">
                    <div className="container px-6 mx-auto">
                        <section className="grid grid-cols-1 gap-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-2">
                            

                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                    “I've been fortunate to learn from Yogesh during my Data Science journey. His extraordinary mentor skills are seamlessly paired with his profound knowladge and passion for the discipline. Over years of professional experience, he developed afficient ways to explain complex subjects without trivialization. Equally important is that he stays on top of all new developments, helping his students navigate the constantly growing and chenging landscape of Data Science in the most practical and effective ways.”
                                </p>

                                <div className="flex justify-end items-center -mx-2">
                                    {/* <Image height={100} width={100} className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/> */}

                                        <div className="mx-2 text-left">
                                            <h1 className="font-semibold text-gray-800 text-right ">Milena Z. Fisher</h1>
                                            <span className="text-sm text-gray-500">(Ph.D. Philosopher Mäetische scholar), Data Scientist</span>
                                        </div>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                    “Yogesh was my trainer and mentor during my Data Science and Business Analytics certificate. He was so very knowledgeable, and because of his industry experience he was able to offer us plenty of "how this is done in reat life" insights. He was very pleasant to have as a trainer and very patient, helping us all understand these new concepts by using really clear language and explanations. He alway's managed to find a crisp, pertinent explanation that cleared up our confusion.”
                                </p>

                                <div className="flex justify-end items-center -mx-2">
                                    {/* <Image height={100} width={100} className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/> */}

                                        <div className="mx-2 text-left">
                                            <h1 className="font-semibold text-gray-800 text-right ">Victoria Morgan</h1>
                                            <span className="text-sm text-gray-500">Data-driver Storyteller & Communications Consultant</span>
                                        </div>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                    “Yogesh stands out as a mentor in the No Code Al course with his unique ability to simplify.complex concepts through easy-to-understand metaphors, making learning engaging and far from boring. His deep industry experience enriches his classes with real-world insights, bringing theories to life. Yogesh's approachable and patient teaching style has significantly enhanced my understanding of Al, always ensuring his explanations are olear and relevant. His dedication to staying updated with the latest developments in the field ensures his students are well-prepared for the future. I highly recommend Yogesh to anyone looking to make strides in Al, for an educational experience that is both enlightening and enjoyable.”
                                </p>

                                <div className="flex justify-end items-center -mx-2">
                                    {/* <Image height={100} width={100} className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/> */}

                                        <div className="mx-2 text-left">
                                            <h1 className="font-semibold text-gray-800 text-right ">Mohsen Hashemi</h1>
                                            <span className="text-sm text-gray-500">Supply Cal Purchasing Spol</span>
                                        </div>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                    “Yogesh was an excellent Data Science mentor and concisely explained numerous learning models as well as bow to apply them to real work data, He went the extra mile for students working on their own projects and made sure to explain how they could deploy the models we learned for their own needs. Lastly, he kept things brief. Often instructors get bogged down in minimally important details that aren't relevant in real world applications. Yogesh made sure to inform us which aspects of our models were commonly deployed in real world settings as well as what details held little relevance. Thanks Yogesh!”
                                </p>

                                <div className="flex justify-end items-center -mx-2">
                                    {/* <Image height={100} width={100} className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/> */}

                                        <div className="mx-2 text-left">
                                            <h1 className="font-semibold text-gray-800 text-right ">Anatole Colevas</h1>
                                            <span className="text-sm text-gray-500">Date Analyst Database Management Pallys Modeling and Visualizalice</span>
                                        </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}
