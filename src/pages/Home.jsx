import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import hero from '../assets/Group 39479.png'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import bgBubble from '../assets/bg-bubble.png'
import Showchar from '../components/Showchar';
import logo from '../assets/logos.png';
import { GoArrowUpRight } from 'react-icons/go';
import bg from '../assets/bg.png';
import website from '../assets/website.png';
import mobile from '../assets/mobile.png';
import ai from '../assets/AI.png';
import custom from '../assets/custom.png';
import figma from '../assets/graphic.png';
import digital from '../assets/Digital.png';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import mand from '../assets/unnamed (1).png'
import Club from '../assets/club.png'
import iconic from '../assets/iconic.png'
import avp from '../assets/avp.png'



const Home = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiper = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const reviews = [
        {
            id: 1,
            name: 'Mandaean Life',
            designation: "Billy Jaderpor",
            review: '“Working with Pinnacle Route was a game-changer for our brand. The team brought our vision to life with a beautiful, responsive digital experience that truly reflects our identity. They were professional, detail-oriented, and exceeded every expectation. Highly recommend for anyone serious about digital excellence!”',
            rating: 5,
        },
        {
            id: 2,
            name: 'The Designer Club',
            designation: "Maddie Davies",
            review: '“Pinnacle Route made the process of creating our fashion platform seamless and inspiring. They combined creativity with technical expertise to deliver a stunning and user-friendly website. Communication was always clear and timely, and the results were even better than we imagined!”',
            rating: 5,
        },
        {
            id: 3,
            name: 'Iconic Jewelry',
            designation: "Bashar Saeed",
            review: '“I could not have asked for a better partner than Pinnacle Route. They understood the elegance and sophistication we needed for our jewelry brand and brought it to life with precision and beauty. Their attention to detail and commitment to quality were outstanding from start to finish.”',
            rating: 5,
        }
    ];

    const data = [
        {
            id: 1,
            title: "Mandaean Life",
            website: `Android: https://play.google.com/store/apps/details?id=com.mandaean
            \n
            iOS: https://apps.apple.com/in/app/mandaean-life/id6450825296`,
            description: `
          This mobile app is a massive online resource community for Mandaean history, beliefs & events!
          `,
            imageUrl: mand
        },
        {
            id: 2,
            title: "The Designer Club",
            website: `Website: https://thedesignerclub.com.au/            `,
            description: "It's an Aussie platform where you can rent or lend clothes from other people's wardrobes!            ",
            imageUrl: Club
        },
        {
            id: 3,
            title: "Iconic Jewelry",
            website: `Website: https://www.iconicjewelry.com/ `,
            description: "It's an e-commerce platform producing climate-conscious jewelry.             ",
            imageUrl: iconic
        }
    ];

    const gridData = [
        {
            id: 1,
            title: "AI & Automation",
            description: "We specialize in AI-driven solutions and automation technologies that optimize business processes, enhance efficiency, and drive intelligent decision-making.",
            imageUrl: ai,
        },
        {
            id: 2,
            title: " Website Development:",
            description: "We create engaging, high-performance websites with design, development, and maintenance using the latest technologies.",
            imageUrl: website, // Replace with your image URL
        },
        {
            id: 3,
            title: " Mobile App Development",
            description: "We build interactive, feature-rich iOS and Android apps, focusing on user-centric design to enhance engagement and deliver value.",
            imageUrl: mobile, // Replace with your image URL
        },
        {
            id: 4,
            title: "Custom Software Development",
            description: "We build custom, scalable software to streamline processes, improve efficiency, and drive growth, tailored to your unique business needs.",
            imageUrl: custom, // Replace with your image URL
        },
        {
            id: 5,
            title: "Graphic Design",
            description: "We create visually compelling graphics, including logos and marketing materials, to enhance your brand identity and resonate with your audience.",
            imageUrl: figma, // Replace with your image URL
        },
        {
            id: 6,
            title: "Digital Marketing",
            description: "We enhance online presence and drive conversions through SEO, PPC, social media, and content marketing, maximizing your ROI.",
            imageUrl: digital, // Replace with your image URL
        }
    ];

    return (
        <div className='bg-black'>
            <Navbar />
            <img className="mt-4" src={hero} alt="" srcset="" />
            <Showchar />
            <div className='bg-black pt-24 pb-8 text-white flex flex-col items-center'>
                <p className='text-3xl text-center font-semibold'>
                    We collaborate with <span className='text-blue-600'>50+ leading companies</span>
                </p>
                <img src={logo} alt="" className='mt-12 h-20' />
            </div>
            {/* <div className='w-full flex lg:flex-row flex-col justify-between items-center bg-white md:px-12 px-6 pt-24 md:pb-28 pb-12 text-blue-600'>
                <div className='lg:max-w-[50%] w-full lg:text-5xl sm:text-4xl text-3xl font-bold'>
                    We thrive at transforming product ideas into digital life
                </div>
                <div className="relative flex justify-around items-center lg:w-[40%] sm:w-[50%] w-[80%] lg:mt-0 mt-12 lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold">
              
                    <img
                        src={bgBubble}
                        alt="Background"
                        className="absolute w-full left-0 z-0"
                    />
                    <div className="relative z-10 flex justify-around items-center w-full">
                        <div>10</div>
                        <div>113+</div>
                    </div>
                </div>
            </div>
            <div className="w-full px-16 pb-16 bg-white z-10">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-12 items-center"
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="order-1 md:order-none">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-700 text-xl">{item.description}</p>
                                </div>
                                <div className="order-2 md:order-none">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="order-2 md:order-none">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="order-1 md:order-none">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-700 text-xl">{item.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                <div className='w-full flex justify-center mt-16'>
                    <a href="#contact" className="border border-blue-600 text-blue-600 px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                        <div>
                            Know More
                        </div>
                        <GoArrowUpRight className="ml-1" />
                    </a>
                </div>
            </div> */}
            <div className="w-full px-4 md:px-16 pb-16 z-10 text-white">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12 mb-12 items-center"
                    >
                        {index % 2 === 0 ? (
                            <>
                                {/* Text on Left, Image on Right */}
                                <div className="order-1 md:order-none lg:col-span-6">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    {/* <p className="text-1xl font-bold mb-2">
                                        {item.website.split('\n').map((line, i) => (
                                            <div key={i}>
                                                <a
                                                    href={line.trim().split(': ')[1]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 underline hover:text-blue-300"
                                                >
                                                    {line.trim()}
                                                </a>
                                            </div>
                                        ))}
                                    </p> */}
                                    <p className="text-gray-400 text-xl whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="order-2 md:order-none lg:col-span-6">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto max-h-[400px] object-contain shadow-lg"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Image on Left, Text on Right */}
                                <div className="order-2 md:order-none lg:col-span-6">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto max-h-[400px] object-contain shadow-lg"
                                    />
                                </div>
                                <div className="order-1 md:order-none lg:col-span-6">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    {/* <p className="text-1xl font-bold mb-2">
                                        {item.website.split('\n').map((line, i) => (
                                            <div key={i}>
                                                <a
                                                    href={line.trim().split(': ')[1]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 underline hover:text-blue-300"
                                                >
                                                    {line.trim()}
                                                </a>
                                            </div>
                                        ))}
                                    </p> */}
                                    <p className="text-gray-400 text-xl whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='py-16'
                style={{ backgroundImage: `url('${bg}')` }}
            >
                <div className='w-full flex sm:pl-0 pl-4 sm:flex-row flex-col justify-around text-white'>
                    <div className='sm:max-w-[35%] max-w-[90%] sm:mb-0 mb-6 text-6xl font-semibold'>
                        Our Technology Stack & offering
                    </div>
                    <div className='flex flex-col sm:max-w-[35%] max-w-[90%]'>
                        <div className='mb-10'>
                            At Pinnacle Route, we leverage a versatile and cutting-edge technology stack to deliver innovative and tailored solutions to our clients. Our team combines expertise in various technologies to create seamless digital experiences that empower businesses to thrive in the digital era.                        </div>
                        <div>
                            <a href="/contact-us" className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                                <div>
                                    Request a Project
                                </div>
                                <GoArrowUpRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 xl:px-28 lg:px-12 md:px-8 px-4 mt-16">
                    {gridData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-xl p-8 flex flex-col"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-14 h-14 mb-4"
                            />
                            <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-[14px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row sm:justify-between sm:items-center px-8 mb-4'>
                    <div className="relative lg:w-[40%] sm:w-[50%] lg:mt-0 mt-12 pb-16 pt-8 md:pt-[90px]">
                        {/* Background Image */}
                        <img
                            src={bgBubble}
                            alt="Background"
                            className="absolute w-full left-0 md:left-[-90px] top-[-20px] lg:top-[-20px] xl:top-[-60px] 2xl:top-[-120px] z-0"
                        />
                        <div className="relative z-10 w-full text-white text-4xl font-semibold mb-6">
                            What Our Clients Say
                        </div>
                        <div className="relative z-10 w-full text-white text-[15px]">
                            Discover the experiences of our satisfied clients. Read client testimonials to see how our solutions positively impacted their businesses.

                        </div>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <a href="/contact-us" className="text-xl bg-black bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                            <div>
                                Talk to Sales
                            </div>
                            <GoArrowUpRight className="ml-1" />
                        </a>
                    </div>
                </div>
                <div className="w-full px-4 sm:px-6 md:px-8">
                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            0: { slidesPerView: 1 },      // ✅ For mobile view
                            640: { slidesPerView: 1 },    // ✅ Just in case
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div
                                    style={{
                                        padding: '25px',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div className='flex gap-2 mb-4'>
                                        {Array.from({ length: review.rating }, (_, index) => (
                                            <svg key={index} width="21" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="..." fill="#FFC700" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className='mb-4'>{review.review}</p>
                                    <h3 className='text-blue-500 font-semibold'>{review.name}</h3>
                                    <h3 className='mt-2'>{review.designation}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;
