# Predictive Maintenance ML Prototype

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

print("🚀 Predictive Maintenance ML Model Started")

# Step 1: Load data
data = pd.read_csv("sensors.csv")
print("\nData Loaded:")
print(data.head())

# Step 2: Select features & target
X = data[["temperature", "vibration", "load", "uptime_hrs"]]
y = data["failure"]

# Step 3: Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Step 4: Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 5: Test model
predictions = model.predict(X_test)

print("\n✅ Model Evaluation")
print("Accuracy:", accuracy_score(y_test, predictions))
print("Confusion Matrix:\n", confusion_matrix(y_test, predictions))
print("Report:\n", classification_report(y_test, predictions))

# Step 6: Demo prediction (NEW machine data)
sample_machine = [[72, 520, 90, 110]]  # temp, vibration, load, uptime
result = model.predict(sample_machine)

print("\n🔮 Live Prediction:")
print("Failure Expected 🚨" if result[0] == 1 else "Machine Normal ✅")
