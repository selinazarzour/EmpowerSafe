import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Chat } from "./components/Chat";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const featureData = [
  {
    title: "Personalized Route Recommendations",
    icon: "fa-solid fa-user-secret", // Icon class for route
    text: "Receive customized route suggestions tailored to your preferences, including safety, speed, and user-defined criteria.",
  },
  {
    title: "Chatbot Assistance",
    icon: "fas fa-comments", // Icon class for chat
    text: "Engage with our chatbot for real-time assistance, guidance, and information on navigating your surroundings safely.",
  },
  {
    title: "User Matching",
    icon: "fas fa-users", // Icon class for users
    text: "Connect with other users in your area to enhance safety through numbers and foster a sense of community while traveling.",
  },
  {
    title: "Privacy Protection",
    icon: "fas fa-lock", // Icon class for lock
    text: "Rest assured that your personal data is handled with strict privacy measures in place to ensure confidentiality and security.",
  },
];

const teamData = [
  {
    name: "Linda Gao",
    job: "CEO",
    image: "img/team/linda.jpeg", // Replace with actual image URL
  },
  {
    name: "Selina Zarzour",
    job: "Lead Developer",
    image: "https://media.licdn.com/dms/image/D5603AQFKJA9a3JgkYQ/profile-displayphoto-shrink_800_800/0/1703831751128?e=1717027200&v=beta&t=yXPNZF11FjATyL41EYBoRTpMTBRq-TGvHaKgGlycQz0", // Replace with actual image URL
  },
  {
    name: "Arushi Bhatt",
    job: "Designer",
    image: "https://example.com/arushi.jpg", // Replace with actual image URL
  },
  {
    name: "Stuti",
    job: "Marketing Manager",
    image: "https://example.com/stuti.jpg", // Replace with actual image URL
  },
];

const LandingPage = ({ landingPageData }) => {
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={featureData} />
      <About data={landingPageData.About} />
      <Chat data={landingPageData.Chat} />
      <Team data={teamData} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return <LandingPage landingPageData={landingPageData} />;
};

export default App;