import React from "react";

export default function CarModel(props) {
    const car = props.car;

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
        {car.apple_carplay === "TRUE" && (
            <div className="tag"> Apple CarPlay</div>
        )}
        {car.keyless_entry === "TRUE" && (
            <div className="tag"> Keyless Entry</div>
        )}
        {car.dynamic_cruise_control === "TRUE" && (
            <div className="tag"> Dynamic Cruise</div>
        )}
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
            Visit Website <i class="bi bi-box-arrow-up-right ml-1"></i>
        </a>
        <button onClick={() => {
            props.profile.carCollections.push(car.title);
            addToCarCollection(car.title);
        }}>Add to my collections</button>
        </div>
        </div>)
}
