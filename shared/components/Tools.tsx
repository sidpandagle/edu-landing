import Image from "next/image";
import apachespark from '@/public/tools/apachespark.png'
import mysql from '@/public/tools/mysql.png'
import numpy from '@/public/tools/numpy.png'
import pandas from '@/public/tools/pandas.png'
import python from '@/public/tools/python.png'
import scikitlearn from '@/public/tools/scikitlearn.png'
import powerbi from '@/public/tools/powerbi.svg'
import keras from '@/public/tools/keras.png'
import tensorflow from '@/public/tools/tensorflow.svg'
import aws from '@/public/tools//aws.svg'

export default function Tools() {
    const logos = [
        { src: apachespark, alt: 'apachespark', title: "Apache Spark", height: 100, width: 100 },
        { src: mysql, alt: 'mysql', title: "MySQL", height: 100, width: 100 },
        { src: numpy, alt: 'numpy', title: "Numpy", height: 100, width: 100 },
        { src: pandas, alt: 'pandas', title: "Pandas", height: 100, width: 100 },
        { src: python, alt: 'python', title: "Python", height: 100, width: 100 },
        { src: scikitlearn, alt: 'scikitlearn', title: "Scikit Learn", height: 100, width: 100 },
        { src: powerbi, alt: 'powerbi', title: "PowerBI", height: 50, width: 50 },
        { src: keras, alt: 'keras', title: "Keras", height: 100, width: 100 },
        { src: tensorflow, alt: 'tensorflow', title: "Tensorflow", height: 50, width: 50 },
        { src: aws, alt: 'aws', title: "AWS", height: 50, width: 50 },
    ]
    return (
        <section className="bg-white" id="recruiters">
            <div className="pt-8 lg:pt-16 mx-auto ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Our Tools and Technologies</h2>
                <div className="flex justify-center">
                    <p className="mb-2 lg:mb-2 font-light text-center text-gray-500 sm:text-xl">Empowering Innovation with Cutting-Edge Tools and Technologies</p>
                </div>
                <main className="relative py-8 flex flex-col justify-center overflow-hidden">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            {logos.map((logo, index) => (
                                <div key={index}>
                                    <li className="text-center h-24 flex items-center justify-center">
                                        <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
                                    </li>
                                    <div className="text-sm text-center font-semibold">{logo.title}</div>
                                </div>
                            ))}
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            {logos.map((logo, index) => (
                                <div key={index}>
                                    <li className="text-center h-24 flex items-center justify-center">
                                        <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
                                    </li>
                                    <div className="text-sm text-center  font-semibold">{logo.title}</div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}
