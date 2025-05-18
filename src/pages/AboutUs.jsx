import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import about1 from '../assets/about-us-1.png'
import about2 from '../assets/about-us-2.png'
import team from '../assets/Rectangle 24.png'
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const AboutUs = () => {
    const [selected, setSelected] = useState(0);

    const data = [
        {
            id: 1,
            title: "At Pinnacle Route, we are more than just a technology company",
            description: "We are your partners in growth and success. We collaborate with seasoned business leaders and entrepreneurs to build and transform businesses through innovative digital solutions.            ",
            imageUrl: about1, // Replace with your image URL
        },
        {
            id: 2,
            title: "With over a decade of expertise",
            description: "We guide businesses across all industries through their digitalization and automation journey, leveraging cutting-edge AI technologies. Our mission is clear—to help businesses move forward in every stage of their product journey, propelling them towards digital greatness.            ",
            imageUrl: about2, // Replace with your image URL
        },
    ];

    const manifestoData = [
        {
            id: 1,
            title: "Innovation at the Core",
            description: "We foster a culture of innovation, constantly pushing boundaries to deliver cutting-edge digital solutions that drive success for our partners.            ",
            imageUrl: about1, // Replace with your image URL
        },
        {
            id: 2,
            title: "Long-Term Partnerships",
            description: "We are committed to building strong, long-lasting partnerships with our clients, working hand-in-hand to achieve their goals and propel their businesses to new heights.",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 3,
            title: "Customer-Centric Approach",
            description: "Every decision and solution is tailored to meet the unique needs and challenges of our clients.            ",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 4,
            title: "Continuous Learning and Growth",
            description: "We stay ahead of industry trends and technologies to provide our partners with the most advanced and effective solutions.            ",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 5,
            title: "Ethical and Transparent Practices",
            description: "Integrity and transparency are the cornerstones of our operations, ensuring trust and reliability in every interaction.            ",
            imageUrl: about2, // Replace with your image URL
        }
    ];

    const teamData = [
        {
            id: 1,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 2,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 3,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 4,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 1,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 2,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 3,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 4,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        }
    ];

    return (
        <div className='bg-black'>
            <Navbar />
            <div className='py-24 flex flex-col items-center'>
                <div className='flex flex-col items-center text-white'>
                    <div className='text-4xl font-bold'>Elevate Your Business with Pinnacle Route</div>
                </div>
            </div>
            <div className="w-full px-4 md:px-16 pb-16 z-10 text-white">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-24 mb-12 items-center"
                    >
                        {/* Conditional Rendering for Alternating Layout */}
                        {index % 2 === 0 ? (
                            <>
                                {/* Text on Left, Image on Right */}
                                <div className="order-1 md:order-none lg:col-span-2">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-400 text-xl">{item.description}</p>
                                </div>
                                <div className="order-2 md:order-none lg:col-span-3">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Image on Left, Text on Right */}
                                <div className="order-2 md:order-none lg:col-span-3">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="order-1 md:order-none lg:col-span-2">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-400 text-xl">{item.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center pb-28'>
                <div className='flex flex-col gap-8 max-w-[90%]'>
                    <div className='text-white text-[30px] font-medium'>
                        <div>
                            OUR MANIFESTO
                        </div>
                    </div>
                    <div className='h-[2px] bg-gray-600 w-[60px]'></div>
                    <div className='flex flex-col gap-4'>
                        {manifestoData.map((data, index) => {
                            return (
                                <div onMouseEnter={() => setSelected(index)} className='flex items-start gap-6 cursor-pointer'>
                                    <div className={`text-7xl font-bold ${selected === index ? "text-blue-600" : "text-gray-800"}`}>{Math.abs(index) < 9 ? `0${index + 1}` : index + 1}</div>
                                    <div>
                                        <div className={`text-[22px] mb-2 ${selected === index ? "text-white" : "text-gray-900"}`}>{data.title}</div>
                                        <div className={`max-w-[620px] text-[16px] ${selected === index ? "text-gray-300" : "text-gray-900"}`}>{data.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-12 lg:px-32 bg-white text-black w-full py-28">
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-28 lg:px-28'>
                        <div className='text-black text-[34px] font-medium'>
                            <div>
                                LEADERSHIP TEAM
                            </div>
                            <div className='h-[2px] bg-gray-600 w-[80px] my-6'></div>
                        </div>
                        <div className='text-[22px]'>
                        Pinnacle Route's experienced leadership team drives innovation and collaboration, guiding the company toward digital excellence.
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamData.map((item) => (
                            <div
                                key={item.id}
                            >
                                <div className='mb-4'>
                                    <img src={item.imageUrl} alt="" srcset="" />
                                </div>
                                <div className='px-8 text-[14px]'>
                                    <div className='font-medium mb-2'>{item.name}</div>
                                    <div className='mb-3.5'>{item.designation}</div>
                                    <div className='h-[2px] bg-gray-400 w-[70px]'></div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default AboutUs;
