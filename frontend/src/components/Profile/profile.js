import React, { useEffect } from "react";

export default function Profile(props) {
    let profile = props.profile;
    const getPriceCategory = (price) => {
        const numericPrice = parseFloat(price.replace(/,/g, ""));
    
        if (numericPrice < 25000) return "$";
        if (numericPrice >= 25000 && numericPrice < 35000) return "$$";
        if (numericPrice >= 35000 && numericPrice < 50000) return "$$$";
        return "$$$$";
    };

    useEffect(() => {
        
      }, []);

	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-column">
					{/* Text content goes here */}

					<h1>Hi {profile.firstName}, below are your car collections: </h1>
                    {profile.carCollections.map((car) => {
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
                        </div>
                    </div>
                    })}
				</div>
			</div>
		</div>
	);
}


