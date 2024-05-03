import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SideNavbarPage = () => {
    const modules = [
        { 
            name: 'Range of EVs', 
            id: 'Range', 
            paragraphs: [
                "The range of modern electric vehicles generally varies on a single charge, the maximum range we can get from EVs is more than five times what it was. However, it wasn't until the late 20th century that EVs gained widespread attention. Batteries are now competing with petrol and diesel on cost."
            ]
        },
        { 
            name: 'Charging Levels', 
            id: 'Levels', 
            paragraphs: [
                ''
                
            ]
        },
        { 
            name: 'Charging Guide', 
            id: 'TGuide', 
            paragraphs: [
                `Charging simply involves connecting to a power source using appropriate cables and connectors `,
                `EVs come with onboard chargers and charging ports`
            ]
        },
        { 
            name: 'Home vs. Public Charging', 
            id: 'Home', 
            paragraphs: [
                "Charging stations can be installed in garages or driveways to provide a convenient and cost-effective charging option for EV owners. Installation may require help from a professional, but is a one time thing that will allow drivers to start their day with a full battery.",
                `Public charging usually consists of Level 2 chargers in parking lots or DC fast charger located along highways and major routes. Specifically, Tesla Superchargers offer extremely fast charging speeds that make it easy for drivers be able to travel long distances without stopping for long.`
            ]
        },
   
    ];

    // Function to scroll to the corresponding section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 70; // Adjust this value as needed
            const elementPosition = element.offsetTop - headerOffset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="text-dark p-3" style={{ width: '200px', position: 'sticky', top: '50px', bottom: '20px', fontSize: '14px', overflowY: 'auto', marginTop: '150px' }}>
                {/* Table of Contents */}
                {modules.map((module, index) => (
                    <Button key={index} onClick={() => scrollToSection(module.id)} className="btn-block mb-2" style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>{module.name}</Button>
                ))}
                {/* Back button */}
                <Link to="/learning">
                    <Button className="btn-block mt-3" style={{ color: 'black', backgroundColor: "var(--primary-color)", border: '1px solid black' }}>Go Back</Button>
                </Link>
            </div>
            {/* Main Content */}
            <div className="flex-grow-1 ml-5 text-white" style={{ paddingTop: '70px' }}>
                <Container className="text-center mt-5 mb-5">
                    <h1 className="mt-3" style={{ marginTop: '50px' }}>Range and Charging</h1>
                    {/* Sections */}
                    {modules.map((module, index) => (
                        <div key={index} id={module.id} className="mt-5">
                            <h2>{module.name}</h2>
                            {(module.id === "Home") && (
                                <iframe style={{
                                    margin: "10px",
                                    border: "1px solid white"
                                }} className="video" width="560" height="315" src="https://www.youtube.com/embed/9EquviskBQQ?si=IfwGDfBClKjJj0Gi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                
                            )}
                            {(module.id === "Levels") && (
                                <img className="infographic" src='/imgs/chargingguide.jpeg'/>
                            )}
                            {/* Render paragraphs */}
                            {module.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                            <hr className="section-separation-line"></hr>
                        </div>
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default SideNavbarPage;
