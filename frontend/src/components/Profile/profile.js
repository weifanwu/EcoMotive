import React, { useEffect } from "react";
import CarModel from '../Car/car'

export default function Profile(props) {
    let profile = props.profile;


    useEffect(() => {
        
      }, []);

	return (
		<div className="about-page">
			<div className="about-container">
				<div className="about-column">
					{/* Text content goes here */}

					<h1>Hi {profile.firstName}, below are your car collections: </h1>
                    {profile.carCollections.map((car) => {
                        <CarModel car={car}/>
                    })}
				</div>
			</div>
		</div>
	);
}


