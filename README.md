# EmpowerSafe

EmpowerSafe is a website designed to help users navigate safely through different areas by providing insights into the safety level of those areas based on various factors such as population density, gender, time of day, and more. It also recommends routes based on safety, speed, and other user preferences.

## Features

- **Safety Assessment:** Users can input their destination and relevant information such as gender and whether they are alone, and the application will provide an assessment of the safety level of the area.
- **Route Recommendations:** SafeRoute suggests routes that prioritize safety, speed, or other user-defined preferences.
- **Chatbot/Call:** Users can engage with a chatbot or make a call for assistance or additional information.
- **Database Integration:** Utilizes existing databases to alert users in case they are approaching or in a dangerous area.
- **User Matching:** Matches users in the same area to facilitate group travel and enhance safety through numbers.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Mapping & Geolocation:** Google Maps API
- **Chatbot Integration:** Dialogflow API
- **Communication:** Twilio API (for calls and SMS)

## Getting Started

### Prerequisites

- Node.js and npm installed locally
- MongoDB set up and running
- Google Maps API key
- Dialogflow API credentials
- Twilio API credentials

### Installation

1. Clone the repository: `git clone https://github.com/your-username/saferoute.git`
2. Navigate to the project directory: `cd saferoute`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
     TWILIO_ACCOUNT_SID=your_twilio_account_sid
     TWILIO_AUTH_TOKEN=your_twilio_auth_token
     ```
5. Start the server: `npm start`
6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Special thanks to [name] for their assistance with [feature]
- Inspiration from [source]

---

Feel free to customize this template to fit your project's specific details and requirements!
