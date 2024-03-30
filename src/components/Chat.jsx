import React, { useEffect } from "react";

export const Chat = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRlYQWtFkOFZqiVjAshdgu9nIUnY9Bzs0&libraries=places`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.65107, lng: -79.347015 },
        zoom: 12,
      });

      // Sample police station data (replace this with actual data)
      const policeStations = [
        { name: "Police Station 1", location: { lat: 43.653225, lng: -79.383186 } },
        { name: "Police Station 2", location: { lat: 43.643715, lng: -79.391369 } },
        // Add more police station data as needed
      ];

      // Loop through the police station data and place markers on the map
      policeStations.forEach((station) => {
        new window.google.maps.Marker({
          position: station.location,
          map: map,
          title: station.name,
        });
      });
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "400px" }}></div>
      <div id="Chat" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Chat Bot</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
