import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>At SafeRoute, we understand the importance of feeling safe and secure as you move through different areas, whether you're commuting to work, running errands, or exploring new neighborhoods. Our mission is to empower individuals to make informed decisions about their routes by providing real-time insights into the safety levels of various areas.

                Our platform leverages advanced algorithms and cutting-edge technology to analyze data points such as population density, crime statistics, lighting conditions, and more, to assess the safety of specific locations. Whether you're traveling alone or with others, whether it's day or night, SafeRoute equips you with the information you need to choose the safest and most efficient routes.

                But SafeRoute is more than just a navigation tool – it's a community-driven initiative focused on promoting safety and fostering connections among users. Through features like user matching and our chatbot assistance, we aim to create a network of support that enhances the safety and well-being of everyone using our platform.

                At SafeRoute, safety is not just a destination – it's a journey we embark on together. Join us in creating a safer, more connected world, one route at a time.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Comprehensive Safety Assessment</li>
                    <li>Community-Driven Platform</li>
                    <li>User-Friendly Interface</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Privacy and Security</li>
                    <li>Empowering Individuals</li>
                    <li>Real-Time Updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
