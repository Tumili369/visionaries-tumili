import streamlit as st
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

# ------------------ PAGE CONFIG ------------------
st.set_page_config(page_title="Predictive Maintenance", layout="centered")

st.title("🔧 Predictive Maintenance System")
st.write("Machine Learning based failure prediction system")

# ------------------ LOAD DATA ------------------
@st.cache_data
def load_data():
    return pd.read_csv("sensors.csv")

try:
    data = load_data()
    st.success("Sensor data loaded successfully")

except Exception as e:
    st.error("Error loading sensors.csv")
    st.stop()

# ------------------ TRAIN MODEL ------------------
X = data[["temperature", "vibration", "load", "uptime_hrs"]]
y = data["failure"]

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# ------------------ USER INPUT ------------------
st.subheader("Enter Live Sensor Values")

temperature = st.number_input("Temperature (°C)", min_value=0.0, step=1.0)
vibration = st.number_input("Vibration Level", min_value=0.0, step=1.0)
load = st.number_input("Load (%)", min_value=0.0, max_value=100.0, step=1.0)
uptime = st.number_input("Uptime (hours)", min_value=0.0, step=1.0)

# ------------------ PREDICTION ------------------
if st.button("Predict Machine Status"):
    input_data = [[temperature, vibration, load, uptime]]
    prediction = model.predict(input_data)

    if prediction[0] == 1:
        st.error("⚠️ Failure Expected – Maintenance Required")
    else:
        st.success("✅ Machine Operating Normally")
