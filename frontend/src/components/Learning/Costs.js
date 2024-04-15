import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SideNavbarPage = () => {
    const modules = [
        { 
            name: 'Government incentives and Rebates', 
            id: 'Incentives', 
            paragraphs: [
                "Governments around the world offer various incentives to encourage the adoption of EVs",
                `Examples of incentives:
                Rebates
                Tax credits (some up to $7,500)`,
                "These incentives help reduce the upfront cost of purchasing an EV"
            ]
        },
        { 
            name: 'Total Cost of Ownership', 
            id: 'TCO', 
            paragraphs: [
                `An EV’s total cost of ownership over its lifetime is often significantly lower than a traditional vehicle. With fewer moving parts, less maintenance, and lower fuel/electricity costs, an EV requires very little after its initial cost`
            
                
            ]
        },
        { 
            name: 'Fuel Savings', 
            id: 'Savings', 
            paragraphs: [
                "Charging an EV is significantly cheaper than filling a gas tank and is less subject to price fluctuations."
            ]
        }
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
                    <Button className="btn-block mt-3" style={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>Go Back</Button>
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
                            {/* Render paragraphs */}
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
