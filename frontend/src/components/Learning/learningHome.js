import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LearningModulesPage = () => {
    const modules = [
      { name: 'Introduction to EVs', description: 'Start navigating the world of electric vehicles', link: '/learning/intro' }, 
      { name: 'Range and Charging', description: 'Mastering electric vehicle range and the art of charging', link: '/learning/charging' },
      { name: 'Cost of EVs', description: 'A comprehensive price guide to owning an EV', link: '/learning/costs' },
      { name: 'Maintenance and Service', description: 'Learn more about maintenance and service of electric vehicles', link: '/learning/maintenance' },
      { name: 'Environmental Impact', description: 'Explore the positive environmental impact of electric vehicles', link: '/learning/environment' },
      { name: 'Future Trends and Development', description: 'More on electric vehicle technology and future trends', link: '/learning/future' },
      { name: 'Debunking Myths & FAQs', description: 'Separating fact from fiction in the world of EVs ', link: '/learning/FAQs' },
    ];
  
    return (
      <div className="learning-modules-page">
        <Container className="text-center mt-5 mb-5" style={{ paddingTop: '5rem' }}>
          <h1 className="learning-modules-title">Learning Modules</h1>
          <Row className="justify-content-center mt-5">
            <div className="modules-wrapper">
              {modules.map((module, index) => (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Link to={module.link}>
                    <Button
                      variant="light"
                      className="btn-cylindrical btn-white mb-3 btn-custom-width"
                      block // Make button full-width
                    >
                      <div>
                        <span>{module.name}</span>
                        <br />
                        <span className="button-description">{module.description}</span>
                      </div>
                    </Button>
                  </Link>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
};

export default LearningModulesPage;
