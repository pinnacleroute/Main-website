import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import about1 from '../assets/about-us-1.png';
import about2 from '../assets/about-us-2.png';
import service from '../assets/Rectangle 22.png';
import team from '../assets/Rectangle 24.png';
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import opened from '../assets/Open Question.png';
import closed from '../assets/Closed Question.png';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const data = [
    {
      id: 1,
      title: 'AI & Automation Integration',
      pointers: [
        {
          id: '11',
          title: 'Machine Learning Implementation',
          description:
            'We integrate AI-powered analytics for predictive insights and automation.              ',
        },
        {
          id: '12',
          title: 'Chatbot & Virtual Assistant Development',
          description:
            'Enhancing customer interaction and engagement with AI-driven conversational interfaces.',
        },
        {
          id: '13',
          title: 'Predictive Analytics',
          description:
            'AI-driven data insights for smarter decision-making and business forecasting.              ',
        },
        {
          id: '14',
          title: 'Business Process Automation',
          description:
            'Optimizing workflows and improving operational efficiency with AI-powered automation tools.              ',
        }
      ],
      imageUrl: service,
    },
    {
      id: 2,
      title: 'Website Development',
      pointers: [
        {
          id: '21',
          title: 'Custom Design',
          description:
            'We create visually stunning and unique website designs tailored to your brand identity and target audience.',
        },
        {
          id: '22',
          title: 'Responsive Development',
          description:
            'Our websites ensure a seamless user experience across all devices and screen sizes.            ',
        },
        {
          id: '23',
          title: 'User-Centric Approach',
          description:
            'We prioritize intuitive navigation and interactive elements to engage visitors and drive conversions.',
        },
        {
          id: '24',
          title: 'Business Process Automation',
          description:
            'Optimizing workflows and improving operational efficiency with AI-powered automation tools.              ',
        },
        {
          id: '25',
          title: 'Performance Optimization',
          description:
            'Our websites are built for speed, SEO-friendliness, and high performance to enhance user satisfaction.            ',
        }
      ],
      imageUrl: service,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      pointers: [
        {
          id: '41',
          title: 'Cross-Platform & Native Development',
          description:
            'Expertise in both native iOS/Android and cross-platform frameworks.            ',
        },
        {
          id: '42',
          title: 'Feature-Rich Solutions',
          description:
            'We build apps with robust functionalities to align with your business goals and enhance user experiences.            ',
        },
        {
          id: '43',
          title: 'UI/UX Excellence',
          description:
            'Our user-centric designs ensure smooth navigation and engaging interfaces.            ',
        },
        {
          id: '44',
          title: 'Comprehensive Testing',
          description:
            'We conduct rigorous quality assurance to guarantee security, performance, and reliability.            ',
        }
      ],
      imageUrl: service,
    },
    {
      id: 4,
      title: 'Custom Software Development',
      pointers: [
        {
          id: '31',
          title: 'Tailored Solutions',
          description:
            'We develop scalable and adaptable software to meet unique business requirements.            ',
        },
        {
          id: '32',
          title: 'Agile Development',
          description:
            'Our iterative approach allows for continuous feedback and improvement.            ',
        },
        {
          id: '33',
          title: 'Seamless Integration',
          description:
            'Our software solutions easily integrate with existing systems for efficiency and automation.     ',
        },
        {
          id: '34',
          title: 'End-to-End Support',
          description:
            'We manage the entire lifecycle, from ideation to maintenance and future scalability.            ',
        }
      ],
      imageUrl: service,
    },
    {
      id: 5,
      title: 'Graphic Design',
      pointers: [
        {
          id: '51',
          title: 'Brand Identity Creation',
          description:
            'We craft visuals that enhance your brand recognition and perception.            ',
        },
        {
          id: '52',
          title: 'Creative Design Solutions',
          description:
            'Our services include logos, branding materials, marketing collateral, and advertisements.            ',
        },
        {
          id: '53',
          title: 'Visual Storytelling',
          description:
            'We bring your brand’s message to life through compelling graphics.           ',
        },
        {
          id: '54',
          title: 'Consistent Aesthetics',
          description:
            'Ensuring uniformity across branding and marketing materials for a strong visual impact.            ',
        }
      ],
      imageUrl: service,
    },
    {
      id: 6,
      title: 'Digital Marketing',
      pointers: [
        {
          id: '61',
          title: 'Targeted Marketing Strategies',
          description:
            'We develop campaigns focused on reaching your ideal audience.            ',
        },
        {
          id: '62',
          title: 'Data-Driven Approaches',
          description:
            'Leveraging analytics for continuous strategy refinement and improved performance.            ',
        },
        {
          id: '63',
          title: 'Engaging Content Creation',
          description:
            'High-quality content across multiple digital channels to maximize engagement.            ',
        },
        {
          id: '64',
          title: 'Performance Tracking & Optimization',
          description:
            'Transparent insights and actionable improvements to drive conversions.         ',
        }
      ],
      imageUrl: service,
    }
  ];

  const handleChange = (panelId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [panelId]: !prevState[panelId],
    }));
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="pb-16 pt-20 flex flex-col items-center bg-white">
        <div className="flex flex-col items-center mb-8 text-black">
          <div className="text-4xl font-bold">
          Future-Ready IT: Powered by Cloud & AI Innovation
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-32 py-24 z-10 text-white">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 mb-12 items-center"
          >
            <div className="order-1 md:order-none flex flex-col gap-6">
              <div className={`text-5xl font-medium text-gray-700`}>
                {Math.abs(index) < 9 ? `0${index + 1}` : index + 1}
              </div>
              <h2 className="text-4xl font-semibold">{item.title}</h2>
              <p className="text-gray-400 text-xl">{item.description}</p>
              {item?.pointers?.map((pointer) => {
                return (
                  <Accordion
                    key={pointer.id}
                    expanded={expanded[pointer.id] || false}
                    onChange={() => handleChange(pointer.id)}
                    sx={{
                      backgroundColor: 'black',
                      boxShadow: 'none',
                      background: '#404040',
                    }}
                  >
                    <AccordionSummary sx={{ color: 'white' }}>
                      <div className="w-full flex justify-between items-center">
                        <div className="max-w-[90%]">{pointer.title}</div>
                        <div className="font-semibold">
                          {expanded[pointer.id] ? 'x' : '+'}
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: 'white' }}>
                      <div className="text-xl">{pointer.description}</div>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <div className="order-2 md:order-none">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Services;
