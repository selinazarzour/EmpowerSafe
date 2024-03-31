import React, { useEffect } from "react";

export const Maps = (props) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRlYQWtFkOFZqiVjAshdgu9nIUnY9Bzs0&libraries=places`;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Initialize the map with default center
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 43.65107, lng: -79.347015 }, // Default center
                zoom: 12,
            });

            // Initialize variables to store user's location
            let userLatitude, userLongitude;

            // Get the user's current location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLatitude = position.coords.latitude;
                        userLongitude = position.coords.longitude;

                        const userLocation = {
                            lat: userLatitude,
                            lng: userLongitude,
                        };

                        // Create a marker for the user's location
                        const userMarker = new window.google.maps.Marker({
                            position: userLocation,
                            map: map,
                            title: "Your Location",
                            icon: {
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Change marker color to blue
                            },
                        });

                        // Center the map on the user's location
                        map.setCenter(userLocation);

                        // Add click event listener to user's marker
                        userMarker.addListener("click", () => {
                            alert(`Latitude: ${userLatitude}, Longitude: ${userLongitude}`);
                        });
                    },
                    (error) => {
                        console.error("Error getting user location:", error);
                    }
                );
            } else {
                console.error("Geolocation is not supported by this browser.");
            }

            // Replace this with your parsed police station data
            const policeStations = [
                { name: "Police Station 1", location: { lat: 43.671035, lng: -79.4605544 } },
                { name: "Police Station 2", location: { lat: 43.6944472, lng: -79.4869646 } },
                // Add more police station data as needed
                { name: "Police Station 3", location: { lat: 43.69827, lng: -79.4366821 } },
                { name: "Police Station 4", location: { lat: 43.6510579, lng: -79.4259188 } },
                { name: "Police Station 5", location: { lat: 43.6428224, lng: -79.5297226 } },
                { name: "Police Station 6", location: { lat: 43.7437365, lng: -79.5836997 } },
                { name: "Police Station 7", location: { lat: 43.7567632, lng: -79.5275118 } },
                { name: "Police Station 8", location: { lat: 43.7719143, lng: -79.4153845 } },
                { name: "Police Station 9", location: { lat: 43.7510489, lng: -79.3499975 } },
                { name: "Police Station 10", location: { lat: 43.730982, lng: -79.2773128 } },
                { name: "Police Station 11", location: { lat: 43.7917827, lng: -79.2281649 } },
                { name: "Police Station 12", location: { lat: 43.770357, lng: -79.1735208 } },
                { name: "Police Station 13", location: { lat: 43.6519742, lng: -79.3619474 } },
                { name: "Police Station 14", location: { lat: 43.6542034, lng: -79.3895975 } },
                { name: "Police Station 15", location: { lat: 43.7060046, lng: -79.4006528 } },
                { name: "Police Station 16", location: { lat: 43.6691887, lng: -79.3172478 } },
            ];

            // Loop through the police station data and place markers on the map
            policeStations.forEach((station) => {
                new window.google.maps.Marker({
                    position: station.location,
                    map: map,
                    title: station.name,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png", // Change marker color to blue
                    },
                });
            });
        };
    }, []);

    return (
        <div id="maps" className="text-center">
            <h2>Our Maps Safety</h2>
            <div id="map" style={{ height: "400px" }}></div>
            <div id="Maps" >
                <div className="container">
                    <div className="section-title">
                        <p>
                            You can navigate safely with our platform
                        </p>
                    </div>
                    <div className="row">
                        {props.data ? (
                            props.data.map((d, i) => (
                                <div key={`${d.name}-${i}`} className="col-md-4">
                                    <i className={d.icon}></i>
                                    <div className="service-desc">
                                        <h3>{d.name}</h3>
                                        <p>{d.text}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
