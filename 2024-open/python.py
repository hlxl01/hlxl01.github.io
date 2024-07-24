import serial
import requests

# Replace 'COM3' with your correct Bluetooth COM port
bluetooth_serial = serial.Serial('COM3', 9600)

url = "http://localhost:3000/update"
headers = {'Content-Type': 'application/json'}

while True:
    if bluetooth_serial.in_waiting > 0:
        data = bluetooth_serial.readline().decode('utf-8').strip()
        print(f"Received: {data}")

        payload = {"type": "sensorValue", "value": data}
        
        response = requests.post(url, json=payload, headers=headers)
        print(f"Response: {response.text}")
