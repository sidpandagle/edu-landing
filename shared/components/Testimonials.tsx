import Image from "next/image";
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
export default function Testimonials() {


    const [my_swiper, set_my_swiper] = useState({ slidePrev: () => { }, slideNext: () => { } });
    const swiper = useSwiper();

    let testimonials = [
        {
            name: 'Rudranee Kavthekar',
            designation: 'Tech Lead, Tata Technologies',
            testimonial: 'Yogesh was my instructor for Business Analytics, R and Tableau. He has very strong domain knowledge, with a friendly approach and open to doubts and discussion. His hands-on approach to problem solving and simplifying concepts so that a person with zero background can also grasp data science concepts is very good. A very informative and knowledgeable person and fun to work with.',
            image: '',
        },
        {
            name: 'Pooja Joshi',
            designation: 'Analyst, Capgemini',
            testimonial: 'Yogesh sir is such a perfect trainer..he will not only teach you the complex concepts of analytics with great ease but also will train you how to think and develop your thought process as per the industry needs. His sessions are always full of knowledge, simple and thorough discussions of concepts and fun..of course bcz its Yogesh.',
            image: '',
        },
        {
            name: 'Ashish Jahagirdar',
            designation: 'Sr. Manager, FCA',
            testimonial: 'Yogesh Singh is Technically very sound when it comes to applying business analytics techniques to actual business bottlenecks. His enthusiasm to solve business problem statement is commendable, he is very good at using tools like R and python. Your assignments and classroom trainings have really helped me to grow technically and professionally in my career.',
            image: '',
        },
        {
            name: 'Derrick Braganza',
            designation: 'Program Manager Analytics, Shoppers Stop',
            testimonial: 'What can I say but simply OUTSTANDING. First day of class is a good memory of how you drew away my fears and made me feel comfortable and that we could do it. Simple everyday examples shared making the most complex algorithms look so easy. You have taken time off your busy schedules and replied to us even on subjects that you haven’t taught us. Thank you !!',
            image: '',
        },
        {
            name: 'Saranya Srinivasa Raghavan',
            designation: 'Business Analyst',
            testimonial: 'Yogesh was my Business Analytics trainer.The way he dealt with the concept was so pragmatic. All his classes have been Industrial Oriented. He is a person with a lot of adequate knowledge in the field of data science which made the sessions very interesting and interactive .He made sure the sessions were clear for each and every one of us and never hesitated to go for extra session when needed. I feel so pleased to be trained by Yogesh. Professional,Helpful and Friendly are few adjectives to describe him.',
            image: '',
        },
        {
            name: 'Jivitesh Varma',
            designation: 'Sr. Risk Analyst, Citibank',
            testimonial: 'Yogesh is a detail oriented person with a strategic outlook and new ideas which he always managed to develop as per the need of the hour. An excellent mentor for Data Science to work with/under and who provides you an opportunity to learn every spur of the moment with unconventional ways and forms.',
            image: '',
        },
        {
            name: 'Aman Sharma',
            designation: 'Senior Analyst, eClerx',
            testimonial: 'I had a 1 month course on R Programming conducted by my company. Yogesh sir was my trainer. His way of teaching is fabulous, straight forward and understandable. After his training my knowledge on R programming has grown from nothing to a pretty confident level. Thank you so much sir for training me. Hope we stay in touch and I keep learning more and more from you.',
            image: '',
        },
        {
            name: 'Nabanita Kar',
            designation: 'BI Technology Lead, Globant',
            testimonial: 'Yogesh is a very learned faculty.His style of teaching is very easy to understand and highly appreciable .He is very strong in his domain knowledge and has a practical approach of solving cases. A rare combination is a friendly,learned faculty with assertive nature and he is one of them. I am privileged to have got a chance to enhance my intellect on business analytics from a highly experienced and progressive faculty like him.',
            image: '',
        },
        {
            name: 'Makarand Mahalle',
            designation: 'Data Science Intern, Holga Tech Pvt Ltd.',
            testimonial: 'I was trained by Yogesh on Data science. It was a wonderful learning experience. Yogesh is best at what he does. He is been a great teacher and mentor. I’d like to take an opportunity to appreciate his teaching skills.',
            image: '',
        },
        {
            name: 'Priyanka Vipin Tharayil',
            designation: 'Business Analyst, John Deere',
            testimonial: 'Yogesh Sir has taught us Data Analytics course and I have high regards for his knowledge on this subject, interest on learning & sharing trends in analytics and ability to resolve queries.',
            image: '',
        },
    ]
    return (
        <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-8 sm:text-xl ">Here's why we're the best in Pune for Data Science</p>
                </div>
                <section className="bg-white">
                    <section className=" w-full overflow-hidden">
                        <Swiper
                            onInit={(ev) => {
                                set_my_swiper(ev)
                            }}
                            slidesPerView={2}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                },
                                639: {
                                    slidesPerView: 1,
                                },
                                865: {
                                    slidesPerView: 2
                                },
                                1700: {
                                    slidesPerView: 2
                                }
                            }}

                            // onSlideChange={(i) => { changeSlider(i.realIndex) }}
                            onSwiper={(swiper) => { }}
                        >
                            {testimonials.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        <div className="m-4 bg-white md:h-[370px] border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between">
                                            <p className="text-sm md:text-md text-left text-gray-500 leading-8 transition-all duration-500 mb-9 ">
                                                {item.testimonial}
                                            </p>
                                            <div className="flex items-center gap-5">
                                                <img className="h-16 w-16 rounded-full" src={"/testimonials/" + (index + 1) + ".jpg"} alt={index.toString()} />
                                                <div className="">
                                                    <h5 className="text-gray-900 text-left font-medium transition-all duration-500">{item.name}</h5>
                                                    <span className="text-sm leading-6 text-left text-gray-500">{item.designation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                            )}

                        </Swiper>
                        <div className="flex justify-end gap-2 md:mt-4">
                            <div className="text-slate-700 cursor-pointer hover:text-white border border-slate-700 hover:bg-slate-800   font-medium rounded-lg text-3xl h-10 w-10 flex justify-center items-center text-center me-2 mb-2 dark:border-slate-500 duration-200  dark:text-slate-500  dark:focus:ring-slate-800" onClick={() => { my_swiper.slidePrev(); }}>
                                <button type="button">{'<'}</button>
                            </div>
                            <div className="text-slate-700 cursor-pointer hover:text-white border border-slate-700 hover:bg-slate-800   font-medium rounded-lg text-3xl h-10 w-10 flex justify-center items-center text-center me-2 mb-2 dark:border-slate-500 duration-200  dark:text-slate-500  dark:focus:ring-slate-800" onClick={() => { my_swiper.slideNext(); }}>
                                <button type="button">{'>'}</button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}
