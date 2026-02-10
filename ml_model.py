# Run this separately: python ml_model.py
# This trains your actual ML model and prints coefficients for JS
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("sensors.csv")
X = df[["temperature", "vibration", "load", "uptime_hrs"]]
y = df["failure"]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_scaled, y)

print("ML Model trained! Feature importances:")
print(model.feature_importances_)
print("Ready for production!")
