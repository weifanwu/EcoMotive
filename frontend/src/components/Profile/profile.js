import React, { useEffect, useState } from "react";
import CarModel from "../Car/car";

export default function Profile(props) {
    let profile = props.profile;	  
	console.log("this is the profile");
	console.log(profile);
	  return (
			<>
				<div className="search">
					<div>
						{profile.carCollections.map((car) => {
							return <CarModel profile={profile} car={car} />;
						})}
					</div>
				</div>
			</>
	);
}