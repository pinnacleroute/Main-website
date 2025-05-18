import React, { useState } from "react";
import opened from '../assets/Open Question.png';
import closed from '../assets/Closed Question.png';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import hero5 from '../assets/hero5.jpg';
import bg from '../assets/Group 2184.png';

const FAQ = () => {
    const [expanded, setExpanded] = useState(null);

    const faqData = [
        {
            id: 1,
            title: "How can Pinnacle Route help my business with digital transformation?",
            content: "Pinnacle Route specializes in guiding businesses through their digital transformation journey by offering services such as website development, mobile app development, custom software development, graphic design, and digital marketing. Our expertise and innovative solutions are tailored to drive your business forward in the digital landscape.",
        },
        {
            id: 2,
            title: "What sets Pinnacle Route apart from other technology companies?",
            content: "At Pinnacle Route, we differentiate ourselves through our long-term partnership approach, customer-centric solutions, and commitment to continuous innovation. We prioritize building strong relationships with our clients and delivering tailored digital products and services that address their unique business needs.",
        },
        {
            id: 3,
            title: "How can I collaborate with Pinnacle Route for my business needs?",
            content: "Collaborating with Pinnacle Route is straightforward. Simply reach out to our team, and we will schedule a consultation to discuss your requirements. Whether you need assistance with website development, mobile app creation, or digital marketing strategies, our experts are ready to tailor a solution to meet your specific goals.",
        },
        {
            id: 4,
            title: "What kind of industries does Pinnacle Route serve?",
            content: "Pinnacle Route has extensive experience working across various industries, including but not limited to technology, retail, healthcare, finance, and education. Regardless of the industry, our team is well-equipped to understand your business landscape and provide customized digital solutions to drive your success.",
        }
    ];

    return (
        <div className="container mx-auto py-8 bg-black flex flex-col items-center">
          <div className="relative w-full flex justify-center items-center">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bg}
        alt="Background"
      />
      
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-16 py-16 max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-lg">
        Partner with Pinnacle Route to thrive digitally with our comprehensive technology and services.
        </p>
      </div>
    </div>
        <div className="max-w-[70%]">
            {faqData.map((item, index) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={() => setExpanded(expanded === item.id ? null : item.id)}
                    sx={{
                        backgroundColor: "black",
                        boxShadow: "none",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                        marginBottom: "16px",
                        paddingTop: index === 0 ? 0 : "1.2rem",
                        paddingBottom: "2rem"
                    }}
                >
                    <AccordionSummary
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        <div className="w-full flex justify-between items-center sm:text-2xl text-md">
                            <div className="max-w-[90%]">
                                {item.title}
                            </div>
                            <img className="h-[30px] w-[30px]" src={expanded === item.id ? opened : closed} alt="" />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: "white" }}>
                        <div className="text-xl">{item.content}</div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    </div>
    )
}

export default FAQ;