import { Carousel } from 'bootstrap';
import React, { useEffect,useState } from 'react';
import CarModel from '../Car/car';

const car_card = (car) => {
  return (
    <div className="car-card" key={car.title}>
      <h5 className="card-title px-3 pt-4">{car.title}</h5>
      <img src={car.image} alt={car.title} />
      <div className="card-content">
        <div className="car-price">
          <h5>
            $
            {parseInt(car.price.replace(/,/g, "")).toLocaleString()}
          </h5>
          <p className="avg-text ml-2">Starting Price</p>
        </div>
        <div className="tag">{car.car_type}</div>
        <div className="tag">{getPriceCategory(car.price)}</div>
        <div className="tag">{car.number_of_seats} seats</div>
        <div className="card-info border-top border-bottom">
          <p className="card-description">Drive: {car.drive}</p>
          <p>Size: {car.vehicle_size_class}</p>
          <p>CO2 Emission: {car.co2_emission} grams/mile</p>
        </div>
        <div className="center-container">
          <a
            href={car.external_link}
            target="_blank"
            rel="noopener noreferrer"
            className="info-btn"
          >
            Visit Website <i class="bi bi-box-arrow-up-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
const getPriceCategory = (price) => {
  const numericPrice = parseFloat(price.replace(/,/g, '')); 

  if (numericPrice < 25000) return '$';
  if (numericPrice >= 25000 && numericPrice < 35000) return '$$';
  if (numericPrice >= 35000 && numericPrice < 50000) return '$$$';
  return '$$$$';
};

export const Box = (text) => {
  return (
    <div className="group">
      <div className="overlap-group-2">
        <div className="rectangle" />
        <div className="text-wrapper-4">{text}</div>
        <div className="ellipse" />
        <div className="group-2">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>
      </div>
    </div>
  );
};

const Results = ({ selectedOptions, cars, profile }) => {
  const [collections, setCollections] = useState([]);
  let priceRange, carSizes, carType, mpgRange, totalRange;
  const [deleteCar, setDeleteCar] = useState(false);
  // #1 Price Range
  const priceMapping = {
    'Under $30,000': [0, 30000],
    '$30,000 to $35,000': [30000, 35000],
    '$35,000 to $40,000': [35000, 40000],
    '$40,000 to $45,000': [40000, 45000],
    'above $45,000': [45000, Infinity],
    'No preference': [0, Infinity]
  };
  priceRange = priceMapping[selectedOptions[0]];

  // #2 Size Car Attempt 
  const carSizeMapping = {
    'Small (Under 4 seats)': [0, 4],
    'Medium (5-6 seats)': [5, 6],
    'Large (7+ seats)': [7, Infinity],
    'No Preference': [0, Infinity]
  }
  carSizes = carSizeMapping[selectedOptions[1]];


  // #3 Preference on EV or Hybrid ^^^
  const preferenceEvHyb = {
    'Yes': ['EV'],
    'No': ['Hybrid'],
    'Not Sure': ['EV', "Hybrid"]
  };
  carType = preferenceEvHyb[selectedOptions[2]];
  
  // #4 MPG Range
  const mpgMapping = {
    'Low': [0, 49],
    'Average': [50, 99], 
    'High': [100, Infinity], 
    'No Preference': [0, Infinity]
  };
  mpgRange = mpgMapping[selectedOptions[3]];

  // #5 Savings Range       <-- old one
  // const savingsMapping = {
  //   'More than $6,000': [6000, Infinity],
  //   '$4,000 to $6,000': [4000, 6000],
  //   '$2,000 to $4,000': [2000, 4000],
  //   'Save up to $2,000': [0, 2000],
  //   'No preference': [0, Infinity]
  // };
  // savingsRange = savingsMapping[selectedOptions[4]];

  //#5 Utilization for Transportation
  const rangeMapping = {
    'Errands (Low Distance)': [0, 300], 
    'Commuting (Medium Distance)': [300, 500], 
    'Road Trips (High Distance)': [500, Infinity],
    'No preference': [0, Infinity]
  };
  totalRange = rangeMapping[selectedOptions[4]];

  

  const isInRange = (value, range) => value >= range[0] && value <= range[1];

  const filteredCars = cars.filter(car => {
    const price = parseFloat(car.price.replace(/[^0-9.]/g, ''));
    const vehicleSize = parseInt(car.number_of_seats, 10);
    // #3 none for words
    //const co2Emission = parseInt(car.co2_emission, 10); GOES WITH CO2 QUESTIONS
    const mpg = parseInt(car.combined_MPG, 10);
    const range = parseInt(car.range, 10);

    return price >= priceRange[0] && price <= priceRange[1] &&
            vehicleSize >= carSizes[0] && vehicleSize <= carSizes[1] &&
            carType.includes(car.car_type) &&
            mpg >= mpgRange[0] && mpg <= mpgRange[1] &&
            range >= totalRange[0] && range <= totalRange[1]; // Check if range is within the selected range
  });
  
  filteredCars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));


  const car1 = filteredCars.length < 2 ? cars[0] : filteredCars[0]
  const car2 = filteredCars.length < 2 ? cars[1] : filteredCars[1]

  const fetchData = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_BACKEND_HOST + '/cars/allCarCollections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titles: profile.carCollections }) // Replace with your array of titles
        });

        if (response.ok) {
            const data = await response.json();
            const current = [];
            for (let i = 0; i < data.cars.length; i++) {
                current.push(data.cars[i].title);
            }
            setCollections(current);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error(error);
        // Handle error
    }
};

// Initial fetch when the component is first rendered
useEffect(() => {
    fetchData();
}, []); // Empty dependency array for initial fetch

useEffect(() => {
  fetchData();
}, [deleteCar]); // Empty dependency array for initial fetch

  return (
    <div className="quiz-result">
      <div className="title-container">
        {filteredCars.length < 1 ? <h1>Sorry, no results found. But here are our recommendations:</h1> : <h1>Your Top Recommendations:</h1>}
      </div>
      {
        filteredCars.length === 1 ? 
          <div className="body-container">
            <CarModel style={{ margin: '1000px' }} deleteCar={deleteCar} setDeleteCar={setDeleteCar} profile={profile} collections={collections} car={filteredCars[0]}/>
          </div> : 
          <div className="body-container">
            <CarModel deleteCar={deleteCar} setDeleteCar={setDeleteCar} profile={profile} collections={collections} car={car1}/>
            <CarModel deleteCar={deleteCar} setDeleteCar={setDeleteCar} profile={profile} collections={collections} car={car2}/>
          </div>
      }
      <div className="link-container">
        <a href="/Compare">
          {Box('Compare Cars')}
        </a>
        <a href="/Search">
          {Box('Search for Cars')}
        </a>
      </div>
    </div>
    );
};

export default Results;
