import React, { useState } from 'react';
import { Clock, Users, Utensils, Calendar, CheckCircle, Shield, ChefHat, MessageCircle, Book } from 'lucide-react';

const Home = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "The Hall Dining Management System has completely transformed how we manage our dining hall. It's intuitive, efficient, and saves us countless hours of manual work.",
            name: "John Doe",
            role: "Hall Administrator"
        },
        {
            quote: "As a student, I love being able to plan my meals in advance and track my nutrition. It's like having a personal nutritionist and meal planner!",
            name: "Emily Smith",
            role: "Student"
        },
        {
            quote: "The real-time tracking and menu management features are game-changers. No more waiting in long lines or wondering what's for lunch.",
            name: "Michael Brown",
            role: "Dining Hall Staff"
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            {/* Hero Section with Background Image */}
            <div className="hero min-h-[calc(100vh-4rem)] bg-[url('https://i.postimg.cc/ZKDVRhJh/1.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="hero-content text-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold mb-6 text-black">
                            Buy Your Books in a Store
                        </h1>
                        <p className="text-xl mb-8 text-white">
                            between the pages of a book is a lovely place to be
                        </p>
                        <div className="flex justify-center gap-4">
                            {/* <button className="btn btn-primary">Get Started</button>
                            <button className="btn btn-outline btn-primary">Learn More</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="bg-base-100 py-16 px-4">
                <div className="text-center mb-12">
                    <p className="text-xl text-base-content/70">
                        Some of our books
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            photoUrl: "https://i.postimg.cc/DytLHf2m/Education-And-New-Tech-PB-3-D.jpg",
                            title: "Fantasy",
                            description: "Step into magical realms filled with mythical creatures, epic quests, and legendary heroes."
                        },
                        {
                            photoUrl: "https://i.postimg.cc/rwxxk6mj/istockphoto-173015527-612x612.jpg",
                            title: "Technological Books",
                            description: "Dive into futuristic worlds filled with advanced technology, space exploration, and imaginative adventures."
                        },
                        {
                            photoUrl: "https://i.postimg.cc/d0FdQWZY/istockphoto-1243719665-170667a.jpg",
                            title: "Drama",
                            description: "Explore deep emotional stories that capture the complexity of human relationships and experiences."
                        },
                        {
                            photoUrl: "https://static.wixstatic.com/media/8163e6_76513576bbe7444cb4014aad02e8139b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
                            title: "Mystery",
                            description: "Uncover thrilling plots filled with suspense, secrets, and mind-bending twists."
                        }
                    ].map((feature, index) => (
                        <div key={index} className=" bg-yellow-300">
                            {/* <div className="card-body items-center text-center"> */}
                            <div className="items-center text-center">
                                <img
                                    src={feature.photoUrl}
                                    alt={feature.title}
                                    // className="w-16 h-16 object-cover rounded-full mb-4"
                                    className="w-full mb-4"
                                />
                                <h3 className="card-title text-black font-bold">{feature.title}</h3>
                                <p className='text-black'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Home;