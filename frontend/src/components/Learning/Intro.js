import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNavbarPage = () => {
    const modules = [
        { 
            name: 'History of EVs', 
            id: 'History', 
            paragraphs: [
                "Introduced more than 100 years ago, electric cars are seeing a rise in popularity today for many of the same reasons they were first popular.",
                "Electric vehicles have a rich history dating back to the 19th century. The inception of electric mobility can be traced to inventors like Thomas Davenport and Robert Anderson, who created the earliest electric vehicles.",
                "However, it wasn't until the late 20th century that EVs gained widespread attention.",
                "Whether it’s a hybrid, plug-in hybrid, or all-electric, the demand for electric drive vehicles will continue to climb as prices drop and consumers look for ways to save money at the pump."
            ]
        },
        { 
            name: 'How do EVs work?', 
            id: 'Explanation', 
            paragraphs: [
                "At the heart of an EV is the electric motor, which is powered by a battery pack. This battery stores electrical energy, providing the necessary power for the motor to drive the vehicle. The charging system replenishes the battery, and regenerative braking harnesses energy during deceleration. The electronic control unit orchestrates these components, ensuring seamless and efficient operation.",
            ]
        },
        { 
            name: 'Types of EVs', 
            id: 'Types', 
            paragraphs: [
                "There are several types of electric vehicles, including battery electric vehicles (BEVs), plug-in hybrid electric vehicles (PHEVs), and hybrid electric vehicles (HEVs).",
                "Battery electric vehicles (BEVs) run entirely on electricity and do not have an internal combustion engine.",
                "Plug-in hybrid electric vehicles (PHEVs) have both an internal combustion engine and an electric motor, and they can be plugged in to charge the battery.",
                "Hybrid electric vehicles (HEVs) have an internal combustion engine and an electric motor, but they cannot be plugged in to charge the battery; instead, the battery is charged through regenerative braking and the internal combustion engine."
            ]
        },
        { 
            name: 'Advantages of EVs', 
            id: 'Advantages', 
            paragraphs: [
                "Embracing EVs brings forth a multitude of advantages.",
                "From an environmental standpoint, EVs contribute to reduced air pollution and greenhouse gas emissions, fostering a cleaner and healthier planet.",
                "Economically, owners benefit from lower operating costs, as electricity is generally more affordable than traditional fuels. Government incentives further sweeten the deal, encouraging the transition to electric mobility.",
                "Technologically, electric vehicles showcase innovations in battery technology and smart connectivity, paving the way for a sustainable and interconnected future.",
                "The advantages of EVs extend beyond individual ownership, influencing global energy sustainability and transportation trends."
            ]
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 70;
            const elementPosition = element.offsetTop - headerOffset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="d-flex">
            <div className="text-dark p-3" style={{ width: '200px', position: 'sticky', top: '50px', bottom: '20px', fontSize: '14px', overflowY: 'auto', marginTop: '150px' }}>
                {modules.map((module, index) => (
                    <Button key={index} onClick={() => scrollToSection(module.id)} className="btn-block mb-2" style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>{module.name}</Button>
                ))}
                <Link to="/learning">
                    <Button className="btn-block mt-3" style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>Go Back</Button>
                </Link>
            </div>
            <div className="flex-grow-1 ml-5 text-white" style={{ paddingTop: '70px' }}>
                <Container className="text-center mt-5 mb-5">
                    <h1 className="mt-3" style={{ marginTop: '50px' }}>Introduction to EVs</h1>
                    {modules.map((module, index) => (
                        <div key={index} id={module.id} className="mt-5">
                            <h2>{module.name}</h2>
                            {module.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default SideNavbarPage;
