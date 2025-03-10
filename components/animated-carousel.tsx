"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            image: 'photo1.webp',
            title: 'Sit Amet Consectetur',
            name: 'adipisicing',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            image: 'photo2.webp',
            title: 'Ipsum Dolor',
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            image: 'photo3.avif',
            title: 'Cutt Adipisicing Elit.g',
            name: 'SLIDER',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            image: 'photo4.avif',
            title: 'SLIDER Consectetur Elit',
            name: ' ipsum dolor ',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            image: 'photo5.avif',
            title: 'Sit Amet Consectetur',
            name: 'LOREM',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            image: 'photo6.webp',
            title: 'Ipsum Dolor Sit Amet',
            name: 'Lorem',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="w-full relative lg:h-screen sm:[27rem] h-[80vh] overflow-hidden">
            {/* Carousel Items */}
            {items.map((item, index) => (
                <div
                    key={`${index}-${currentIndex}`} // Add currentIndex to the key
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute top-1/2 lg:left-20 md:left-12 sm:left-8 left-4 transform -translate-y-1/2 text-white">
                        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold uppercase text-orange-400 animate-fade-in">
                            {item.title}
                        </h3>
                        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold uppercase animate-fade-in">
                            {item.name}
                        </h2>

                        <p className="mt-4 text-lg animate-fade-in text-orange-300">
                            {item.description}
                        </p>
                        <div className="mt-6 animate-fade-in z-10">
                            <Link href="/projects"
                                className="px-6 py-2 mr-4 bg-orange-400 text-white rounded"
                            > See More</Link>

                            <button className="px-6 py-[3.5px] border-2 border-white text-orange-400 rounded hover:bg-orange-400 hover:text-white ">
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-400 group-hover:from-orange-100/70 group-hover:via-orange-50/60 group-hover:to-orange-200/70"></div>

            {/* Navigation Arrows */}
            <div className="absolute md:bottom-10 bottom-6 md:left-12 sm:left-8 left-4 transform translate-x-1/2 flex gap-4 z-10">

                <button
                    onClick={prevSlide}
                    className="md:w-9 md:h-9 w-7 h-7 bg-white md:text-lg text-orange-400 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-400 transition"
                >
                    &lt;
                </button>

                <button
                    onClick={nextSlide}
                    className="md:w-9 md:h-9 w-7 h-7 bg-white md:text-lg text-orange-400 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-400 transition"
                >
                    &gt;
                </button>
            </div>


        </section >
    );
};

export default Carousel;