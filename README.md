EmpowerSafe is a website designed to help users navigate safely through different areas by providing insights into the safety level of those areas based on various factors such as time of day, location, day of week, season, and more. It also provides a chatbot to guide the user to emergency contacts and other action they might need to take.

Features

Safety Assessment: Users can input their destination and relevant information such as gender and whether they are alone, and the application will provide an assessment of the safety level of the area.
Police Station Locations: EmpowerSafe shows locations of police stations near the user.
Chatbot/Call: Users can engage with a chatbot or make a call for assistance or additional information.
Database Integration: Utilizes existing databases to alert users in case they are approaching or in a dangerous area.

Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js
Database: Toronto Police Service Open Data, sklearn, pandas, RandomForestRegression
Mapping & Geolocation: Google Maps API
Chatbot Integration: Dialogflow API (Vertex AI)

Prerequisites
Node.js, npm and pandas installed locally
Google Maps API key
Dialogflow API credentials
Twilio API credentials
Installation
Clone the repository: git clone https://github.com/your-username/saferoute.git
Navigate to the project directory: cd saferoute
Install dependencies: npm install
Set up environment variables:
Create a .env file in the root directory.
Add the following variables:
makefile
Copy code
PORT=3000
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
Start the server: npm start
Open your web browser and navigate to http://localhost:3000 to access the application.
Contributing

Contributions are welcome! Please follow these steps:

Fork the repository
Create your feature branch: git checkout -b feature/new-feature
Commit your changes: git commit -am 'Add new feature'
Push to the branch: git push origin feature/new-feature
Submit a pull request
License

This project is licensed under the MIT License.

Acknowledgements

Special thanks to [name] for their assistance with [feature]
Inspiration from [source]
