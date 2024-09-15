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
        <section className="bg-white" id="contact-us">
            <div className="py-2 px-4 mx-auto max-w-screen-md relative">
                <h2 className="text-3xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                {/* <div className="flex justify-center">
                    <p className="mb-4 lg:mb-4 font-light text-center text-gray-500 sm:text-">Have questions? Reach out for support and guidance on your data science journey!</p>
                    </div> */}
                <form action="#" className="space-y-4" onSubmit={submitForm}>
                    <button type="reset" onClick={closeModal}><img src="/cross.svg" className=" absolute right-0 top-0 h-4 w-4" /></button>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="John Doe" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Email</label>
                        <input type="text" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="johndoe@gmail.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Phone</label>
                        <input type="number" id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="+91 9123456789" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900">Graduation Year</label>
                        <select id="graduationYear" onChange={() => { }} value='2024' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required>
                            <option value="" disabled>Select your graduation year</option>
                            {/* <option value="2025">2025</option> */}
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                    {/* <div className="sm:col-span-2">
                        <label   className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="React out to us..."></textarea>
                    </div> */}
                    <button className="btn btn-neutral mr-4">Send Message</button>
                </form>
            </div>
        </section>
    );
}
