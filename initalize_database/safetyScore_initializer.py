import csv
import pandas as pd

#Load the existing CSV file into a into an DataFrame
existing_data = pd.read_csv('Assault_Open_Data.csv')

#Assign dummy weights to impactful variables
weights = {
    'neighbour': 30,
    'hour': 24,
    'doy': 20,
    'dow': 12,
    'lat': 7,
    'long': 7
}

#Calculate safety scores based on the frequences calculated of impactful variables
existing_data['SAFETY_SCORE'] = (
    weights['neighbour'] * (existing_data['HOOD_F']/192566)+
    weights['hour'] * (existing_data['OCC_HOUR_F']/192566) +
    weights['doy'] * (existing_data['OCC_DOY_F']/192566) +
    weights['dow'] * (existing_data['OCC_DOW_F']/192566) +
    weights['lat'] * (existing_data['LAT_F']/192566) +
    weights['long'] * (existing_data['LONG_F']/192566)
)

#Scale the safety scores to range from 1-10
min_score = existing_data['SAFETY_SCORE'].min()
max_score = existing_data['SAFETY_SCORE'].max()
existing_data['SAFETY_SCORE'] = ((existing_data['SAFETY_SCORE'] - min_score) / (max_score - min_score)) * 9 + 1
existing_data['SAFETY_SCORE'] = existing_data['SAFETY_SCORE'].round().astype(int)

#Select only the desired columns needed in your output data file
selected_columns = ['OCC_YEAR', 'OCC_DOY', 'OCC_DOW', 'OCC_HOUR', 'HOOD_158', 'LONG', 'LAT', 'SAFETY_SCORE']
existing_data_selected = existing_data[selected_columns]

#Save the selected data to a new CSV file
existing_data_selected.to_csv('Assault_Open_Data_Safety.csv', index=False)