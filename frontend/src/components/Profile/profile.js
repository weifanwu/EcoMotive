import React, { useEffect, useState } from "react";
import CarModel from "../Car/car";

export default function Profile(props) {
    let profile = props.profile;	  
    const [cars, setCars] = useState([]);

    useEffect(() => {
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
                    setCars(data.cars);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once on mount



	  return (
			<>
				<div className="search">
					<div>
						{cars.map((car) => {
							return <CarModel profile={profile} car={car} />;
						})}
					</div>
				</div>
			</>
	);
}