import csv
from sklearn.model_selection import train_test_split
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import pandas as pd

data = pd.read_csv('EmpowerSafe/initalize_database/safetyScore_assaultData.csv')

cols = ['OCC_YEAR', 'OCC_DOY', 'OCC_DOW', 'OCC_HOUR', 'HOOD_158', 'LONG', 'LAT']
X = data[cols]
Y = data['SAFETY_SCORE']

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.3, random_state=42)
model = RandomForestRegressor()
model.fit(X_train, Y_train)

predictions = model.predict(X_test)

mse = mean_squared_error(Y_test, predictions)
print('Mean Squared Error:', mse)

data_to_predict = pd.read_csv('EmpowerSafe/initalize_database/Test_file.csv')
X_to_predict = data_to_predict[cols]
predicted_safety_scores = model.predict(X_to_predict)

with open('predicted_safety_scores.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['id', 'SAFETY_SCORE'])
    for i, prediction in enumerate(predicted_safety_scores):
        writer.writerow([i + 1, prediction])



