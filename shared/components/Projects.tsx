import Image from "next/image";

export default function Projects() {
    return (

        <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Projects</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">Explore our portfolio of innovative, real-world project solutions.</p>
                </div>
                <section className="bg-white">
                    <div className="container px-6 mx-auto">
                        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-1 xl:grid-cols-1">
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Predictive Analytics for Disease Diagnosis - Healthcare</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                A machine learning solution that analyzes patient data (e.g., medical history, symptoms, lab results) to predict the likelihood of diseases like diabetes or heart conditions. This system assists doctors in early diagnosis, personalized treatment plans, and improved patient care by identifying high-risk patients.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Fraud Detection in Financial Transactions - Finance</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                An AI-powered fraud detection system designed to identify suspicious financial activities in real time. This model flags potential fraud cases by analysing transaction patterns and user behaviour, helping banks and payment systems prevent fraudulent transactions and reduce financial losses.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Product Recommendation Engine - E-commerce</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                A recommendation system that uses collaborative filtering and user behaviour analysis to suggest products that customers are most likely to purchase. This project enhances user experience by personalizing product suggestions based on browsing history, purchase habits, and user preferences, leading to increased sales and customer satisfaction.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Sales Forecasting for Inventory Management - Retail</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                A sales prediction tool that leverages historical sales data, seasonal trends, and market conditions to forecast future product demand. By helping businesses optimize inventory levels and reduce stockouts, this system leads to improved supply chain management and higher revenue.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Customer Churn Prediction - Marketing</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                This project uses machine learning to predict which customers are likely to stop using a product or service based on past interactions, behaviour, and demographic data. By identifying at-risk customers, businesses can implement targeted retention strategies, reducing churn and improving customer loyalty.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Resume Screening and Candidate Matching - Human Resources</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                An AI-based resume screening system that evaluates candidate qualifications and matches them to job openings based on skills, experience, and job requirements. This tool streamlines the recruitment process, ensuring a faster and more accurate selection of top talent.
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg flex flex-col justify-between shadow-md">
                                <div className="-mx-2">
                                    <div className="mx-2 text-left">
                                        <h1 className="font-semibold text-gray-800 ">Chatbot for Automated Customer Support - Customer Service</h1>
                                    </div>
                                </div>
                                <p className="leading-loose text-gray-500 text-left text-sm ">
                                A natural language processing (NLP)--powered chatbot that automatically handles customer queries and issues. By providing instant responses to common questions, this system reduces the need for human intervention in customer service, improving response times and customer satisfaction.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}
