import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert("Please complete the captcha.");
            return;
        }

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            token: recaptchaToken
        };

        try {
            setLoading(true);
            const res = await fetch('https://digital-marketing-api.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log(data);
            setSuccess(true);
        } catch (err) {
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };
    console.log("Token sent to backend:", recaptchaToken);

    return (
        <div className='bg-white flex flex-col justify-between'>
            <Navbar />
            <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col justify-center items-center gap-8 lg:gap-0 lg:flex-row py-16'
            >
                <div className='w-[95%] lg:w-[50%] flex justify-center'>
                    <div className='w-[100%] md:max-w-[60%] border border-[rgba(0,0,0,0.2)] rounded-xl p-6 flex flex-col gap-4'>
                        <input
                            className='w-full rounded-xl bg-gray-200 h-[40px] px-4'
                            type="text"
                            placeholder='Enter Name'
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='w-full rounded-xl bg-gray-200 h-[40px] px-4'
                            type="email"
                            placeholder='Enter Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className='w-full rounded-xl bg-gray-200 h-[40px] px-4'
                            type="text"
                            placeholder='Enter Phone Number'
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            rows="8"
                            className='w-full rounded-xl bg-gray-200 px-4 py-2'
                            placeholder='Please type your message here....'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <ReCAPTCHA
                            // sitekey="6LcxCUorAAAAAExkO3U1MbHiFMEs4s4bVvzjXxb6" // ← use checkbox style key here
                            sitekey="6LfdYVYrAAAAADuAW-DHihyUwvCQRIUWXWdL5r2V"
                            onChange={handleCaptchaChange}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full text-[16px] bg-black bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center rounded-xl"
                        >
                            <div className='w-full flex justify-center text-center'>
                                {loading ? 'Sending...' : 'Send Message'}
                            </div>
                        </button>
                        {success && <div className='text-green-500 text-center'>Message sent successfully!</div>}
                    </div>
                </div>

                {/* Right Side (Contact Details) */}
                <div className='w-[95%] lg:w-[50%] flex justify-center'>
                    <div className='w-[100%] md:max-w-[70%]'>
                        <div className='font-semibold text-[18px] text-gray-400'>CONTACT US</div>
                        <div className='font-semibold text-5xl mb-4'>Get in touch today</div>
                        <div className='text-[20px] mb-16'>
                            Contact us to unlock your digital potential and drive business success.
                        </div>
                        <div className='max-w-[50%] text-[20px] flex flex-col gap-4'>
                            <div>admin@pinnacleroute.com</div>
                            <div>https://www.pinnacleroute.com</div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default ContactUs;
