'use client';
import Image from "next/image";
import { useEffect } from "react";
import ModalContact from "./ModalContact";
export default function Hero() {
    useEffect(() => {
        setTimeout(() => {
            const popupForm = document.querySelector('#popupform') as HTMLInputElement;
            if (popupForm) {
                popupForm.checked = true;
            } else {
                console.error('Element with id "popupform" not found.');
            }
        }, 5000)
    }, [])

    return (
        <section className=" md:bg-[url('/creative.png')] bg-cover bg-top py-4 md:mb-8">
            <div className="flex gap-8 md:flex-rowitems-center justify-center text-neutral py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                <div className="md:w-2/5 h-full">
                    <h1 className=" text-3xl font-extrabold pb-4">
                        Data Science and Business Analytics Course in Pune for FRESH MINDS
                    </h1>
                    <div>
                        In Association with:
                        <img className="rounded-md -translate-x-2" src={"/nasscom1.png"} alt="designerimage" height={50} width={200} />

                        <span className="text-xs italic">National Association of Software and Service Companies</span>
                    </div>
                    <ul className="pt-4 ml-5 list-disc">
                        <li> Industrial on job training</li>
                        <li> Get groomed on different technologies</li>
                        <li> On job training with guaranteed internship</li>
                        <li> Global certification from NASSCOM</li>
                        <li> Industrial expert trainers for grooming</li>
                        <li> Get converted into full time employability</li>
                        <span className="text-sm italic">Terms and conditions applied*</span>
                    </ul>
                </div>
                <div className="md:w-3/5 h-full"></div>
            </div>


            <input type="checkbox" id="popupform" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box rounded-md max-w-2xl p-0">
                    <ModalContact />
                </div>
            </div>
        </section>
    );
}
