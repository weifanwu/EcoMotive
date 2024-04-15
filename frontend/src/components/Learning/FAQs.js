import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SideNavbarPage = () => {
    const modules = [
        { 
            name: 'Common Myths Surrounding EVs', 
            id: 'Myths', 
            paragraphs: [
                `Myth: Electric vehicles are just as bad for the environment as gas cars due to the emissions created from engine production`,
                `Fact: Even with engine production emissions accounted for, the overall emission rate of an EV over a lifetime is typically still lower than gas combustion vehicles. (https://www.energy.gov/sites/default/files/2021-06/FCAB%20National%20Blueprint%20Lithium%20Batteries%200621_0.pdf)`,
                `Myth: The average Electric vehicles is not as affordable than the average gas car.`,
                `Fact: On average, the total cost of ownership an electric vehicle is less than the average gas combustion car when calculating in lifetime fuel and maintenance costs. The federal government also offers tax breaks on first time purchases of electric vehicles to make them more affordable (https://www.cell.com/joule/pdfExtended/S2542-4351(20)30231-2)`,
                `Myth: Electric vehicles do not have the range for daily or long range use.`,
                `Fact: Most average EV cars out now have range up to 250 miles on a single charge, with the average daily trip being less than 50 miles and the average road trip being 50 to 250 miles. (https://www.figma.com/exit?url=https%3A%2F%2Feriepa.com%2Ferie-development-company-debunking-ev-myths-the-range-anxiety-reality-check%2F)`
            ]
        },
        { 
            name: 'Frequently Ask Questions', 
            id: 'FAQs', 
            paragraphs: [
                `How much does charging my EV cost?`,
                `The average cost of one time installation for house charger is around $2000. The average charge cost depends on location which can be found on online resources such as Carmax (https://www.carmax.com/research/ev-charging-cost-calculator)`,
                `How do I know if using electric fuel is more sustainable?`,
                `The emissions of electricity production varies by region. Regions such as PNW generally has clean electricity production due to it’s hydro power plants and more information about emissions from electricity production can be found on Power Profiler (https://www.figma.com/exit?url=https%3A%2F%2Fwww.epa.gov%2Fegrid%2Fpower-profiler%23%2FNWPP)`,
                `How is driving an EV compared to a gas car?`,
                `Most electric vehicles accelerate much faster than gas cars. Most EVs also offer one-pedal driving  that slows the car using regenerative breaking systems allowing drivers to drive with only one pedal. More information on Charger Types and Speeds (https://www.figma.com/exit?url=https%3A%2F%2Fwww.transportation.gov%2Frural%2Fev%2Ftoolkit%2Fev-basics%2Fcharging-speeds)`

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
                    <h1 className="mt-3" style={{ marginTop: '50px' }}>Debunking Myths & FAQs</h1>
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
