import React from "react";
import rocket from "../assets/arrow-black.png"
import twitter from '../assets/fa-twitter.png';
import facebook from '../assets/icons8-instagram-32.png';
import linkedin from '../assets/icons8-linkedin-35.png';


const Footer = () => {
    return (
        <div className="bg-black py-12">
            <div className="flex lg:flex-row flex-col justify-between items-center sm:px-28 px-10 w-full">
                <div className="flex items-start text-white text-lg mb-6 lg:mb-0">
                    <img src={rocket} alt="" />
                    <div className="flex flex-col justify-center ml-4">
                        <h1 className="tracking-wide text-white transition-transform duration-700 transform hover:translate-x-1 text-left">
                            Pinnacle Route
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base text-left">
                            Achieve Digital Excellence
                        </p>
                    </div>
                </div>
                <div className="text-white text-xl flex sm:flex-row flex-col items-center">
                    <div className="text-white text-xl flex sm:flex-row flex-col items-center">
                        <a className="hover:bg-gray-700 transition-colors duration-400 sm:ml-10 ml-0 sm:mt-0 mt-1" href="/policy">Privacy Policy</a>
                        <a className="hover:bg-gray-700 transition-colors duration-400 sm:ml-10 ml-0 sm:mt-0 mt-3" href="/terms">Terms</a>
                    </div>
                    <div className="flex items-center sm:mt-0 mt-4">
                        <a className="sm:ml-10 ml-4" href="https://x.com/PinnacleRoute" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a className="sm:ml-10 ml-4" href="https://www.linkedin.com/in/pinnacle-route/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a className="sm:ml-10 ml-4" href="https://www.instagram.com/pinnacle_route/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer