import React from "react";
import { useLocation } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LaunchIcon from '@mui/icons-material/Launch';
import {message} from 'antd';

export default function CarModel(props) {
    const car = props.car;
    const location = useLocation();
    const pathname = location.pathname;
    const collections = props.collections;

    const addToCarCollection = async (carModel) => {
        try {
            const response = await fetch(process.env.REACT_APP_BACKEND_HOST + '/cars/addToCarCollection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: props.profile.email, carTitle: carModel })
            });

            if (response.ok) {
                // Handle success
                console.log('Added to collection');
            } else {
                throw new Error('Failed to add to collection');
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const deleteCarCollection = (carModel) => {
        fetch(process.env.REACT_APP_BACKEND_HOST + '/cars/deleteCarCollection', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: props.profile.email, carTitle: carModel })
        })
        .then(response => {
            // Check if the request was successful
            if (response.ok) {
            return response.json(); // Parse the response body as JSON
            } else {
            throw new Error('Failed to delete car collection');
            }
        })
        .then(data => {
            console.log(data.message); // Output: "succeed!"
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const getPriceCategory = (price) => {
        const numericPrice = parseFloat(price.replace(/,/g, ""));
        if (numericPrice < 25000) return "$";
        if (numericPrice >= 25000 && numericPrice < 35000) return "$$";
        if (numericPrice >= 35000 && numericPrice < 50000) return "$$$";
        return "$$$$";
    };

	return (<div className="car-card" key={car.title}>
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
        <a
            href={car.external_link}
            target="_blank"
            rel="noopener noreferrer"
            className="info-btn"
        >
            Visit Website
            <LaunchIcon />
        </a>
        {(pathname === '/Profile' || collections.includes(car.title)) ?
            <div
                className="info-favorite-btn"
                onClick={() => {
                const indexToRemove = props.profile.carCollections.findIndex(carModel => carModel.trim() === car.title.trim());
                if (indexToRemove !== -1) {
                    props.profile.carCollections.splice(indexToRemove, 1);
                }
                props.setDeleteCar(!props.deleteCar);
                console.log(props.deleteCar);
                deleteCarCollection(car.title);
                message.success("The car is deleted!");
            }}>
                <FavoriteIcon />
            </div>
        : 
            <div 
                className="info-favorite-btn" 
                onClick={() => {
                props.profile.carCollections.push(car.title);
                props.setDeleteCar(!props.deleteCar);
                addToCarCollection(car.title);
                message.success("The car is added to your collections");
            }}>
                <FavoriteBorderIcon />
            </div>
        }
        </div>
        </div>)
}