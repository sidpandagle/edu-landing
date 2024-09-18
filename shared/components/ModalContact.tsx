'use client'
import { error } from "console";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import Image from "next/image";
import React, { Component } from 'react';
export default function ModalContact() {
    function submitForm(event: any) {
        event.preventDefault(); // Prevents the default form submission
        const name = document && event.target.name.value;
        const email = document && event.target.email.value;
        const phone = document && event.target.phone.value;
        const graduationYear = document && event.target.graduationYear.value;

        // Name validation
        if (name.length < 2) {
            alert("Please enter a valid name with at least 2 characters.");
            return false;
        }

        // Email validation (HTML5 type="email" already handles this)
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Phone validation: Check if it's a 10-digit number
        // const phonePattern = /^[0-9]{10}$/;
        // if (!phonePattern.test(phone)) {
        //     alert("Please enter a valid 10-digit phone number.");
        //     return false;
        // }

        // Graduation year validation
        if (!graduationYear) {
            alert("Please select your graduation year.");
            return false;
        }
        // let message = `Name: ${name}, Email: ${email}, Phone: ${phone}, Graduation Year: ${graduationYear}`;

        // Whatsapp API
        // fetch(`https://api.callmebot.com/whatsapp.php?phone=919146178765&text=${message}&apikey=1178605`).then((response) => {
        //     console.log(response)
        //     alert("✨ Thank You, We're excited to reach out to you soon! 😊");
        // },error => {
        //     alert("✨ Thank You, We're excited to reach out to you soon! 😊");
        // })

        const url = 'https://pune.nsarrows.com/api.php?action=create';
        const data = {
            name: name,
            phone: phone.toString(),
            email: email,
            graduation: graduationYear
        };

        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(() => {
                closeModal();
                alert("✨ Thank You, We're excited to reach out to you soon! 😊");
            });

        } catch (error) {
            closeModal();
            alert("Something went wrong, please contact administrator");
        }

        return true;
    }

    function validateEmail(email: string) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }


    const closeModal = () => {
        const popupForm = document.querySelector('#popupform') as HTMLInputElement;
        if (popupForm) {
            popupForm.checked = false;
        } else {
            console.error('Element with id "popupform" not found.');
        }

    }

    return (
        <section className="bg-white w-full relative" id="contact-us">
            {/* <img src="/people/maleright.jpg" className="h-[200px] top-0 object-cover mb-4" alt="designer" height={100} width={700} /> */}
            <img src="/people/maleright.jpg" className="h-[215px] top-0 object-cover mb-4" alt="designer" height={100} width={700} />
            <div className="absolute top-0 h-[200px] w-3/4 md:w-3/5 p-4 md:p-8 flex flex-col gap-4">
                <div className="font-semibold  text-xl md:text-2xl">
                    Want to Make
                    4-10 LPA as a
                    DATA SCIENTIST?
                </div>
                <div className="text-lg">
                Upgrade Your Skills and <br /> Achieve a Competitive Salary
                </div>
            </div>
            <div className="py-2 px-4 mx-auto max-w-screen-md">
                {/* <h2 className="text-3xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2> */}
                <div onClick={closeModal}>
                    <img src="/cross.svg" className="absolute cursor-pointer right-0 top-0 h-12 w-12 p-4" />
                </div>
                <form action="#" className="space-y-4" onSubmit={submitForm}>
                    <div>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2 py-2" placeholder="Name (John Doe)" required />
                    </div>
                    <div>
                        <input type="text" id="email" className="block px-2 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Email (johndoe@gmail.com)" required />
                    </div>
                    <div>
                        <input type="number" id="phone" className="block px-2 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Phone (+91 9123456789)" required />
                    </div>
                    <div>
                        <select id="graduationYear" onChange={() => { }} className="block px-2 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required>
                            <option value="" disabled>Select your graduation year</option>
                            {/* <option value="2025">2025</option> */}
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                    <div className="pb-1">
                        <button className="btn btn-neutral text-center">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
