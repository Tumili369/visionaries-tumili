#include <DHT.h>
#include <Adafruit_BMP085.h>
#include <Wire.h>

// -------- PIN CONFIGURATION --------
#define DHTPIN 15
#define DHTTYPE DHT22
#define VIBRATION_PIN 34
#define LED_PIN 2

// -------- THRESHOLD VALUES --------
#define TEMP_LIMIT 45.0
#define PRESSURE_LOW 980.0
#define PRESSURE_HIGH 1050.0
#define VIBRATION_LIMIT 2000

DHT dht(DHTPIN, DHTTYPE);
Adafruit_BMP085 bmp;

void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22);          
  pinMode(LED_PIN, OUTPUT);   

  if (!bmp.begin()) {
    Serial.println("❌ BMP180 not detected");
    while (1);
  }

  Serial.println("✅ BMP180 connected");
}

void loop() {
  float temperature = dht.readTemperature();
  float pressure = bmp.readPressure() / 100.0; 
  int vibration = analogRead(VIBRATION_PIN);

  bool faultDetected = false;

  Serial.println("------ SENSOR READINGS ------");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");

  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" hPa");

  Serial.print("Vibration: ");
  Serial.println(vibration);

  // -------- FAULT CHECKING --------
  if (temperature > TEMP_LIMIT) {
    Serial.println("⚠️ Fault: High Temperature");
    faultDetected = true;
  }

  if (pressure < PRESSURE_LOW || pressure > PRESSURE_HIGH) {
    Serial.println("⚠️ Fault: Abnormal Pressure");
    faultDetected = true;
  }

  if (vibration > VIBRATION_LIMIT) {
    Serial.println("⚠️ Fault: Excessive Vibration");
    faultDetected = true;
  }

  // -------- LED BLINK ON FAULT ONLY --------
  if (faultDetected) {
    Serial.println("🚨 MACHINE STATUS: FAULT");
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
  } else {
    digitalWrite(LED_PIN, LOW);  
    Serial.println("✅ MACHINE STATUS: NORMAL");
    delay(1000);
  }

  Serial.println("-----------------------------\n");
}
