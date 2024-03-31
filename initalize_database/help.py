from sklearn.model_selection import train_test_split
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import pandas as pd

def prediction_model():
    data = pd.read_csv('EmpowerSafe/initalize_database/safetyScore_assaultData.csv')

    cols = ['OCC_YEAR', 'OCC_DOY', 'OCC_DOW', 'OCC_HOUR', 'HOOD_158', 'LONG', 'LAT']
    X = data[cols]
    Y = data['SAFETY_SCORE']

    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.5, random_state=42)
    model = RandomForestRegressor()
    model.fit(X_train, Y_train)

    return model

def predict_safe_scores(model, YEAR, DOY, DOW, HOUR, HOOD, LONG, LAT):
    user_values = [[YEAR, DOY, DOW, HOUR, HOOD, LONG, LAT]]
    safe_score = model.predict(user_values)
    return safe_score[0]

model = prediction_model()
safety_score = predict_safe_scores(model, 2024, 92, 7, 2, 170, -79.4, 43.7)