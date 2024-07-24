    import serial
   import requests

   # Replace 'COM3' with your HC-05 Bluetooth COM port
   bluetooth_serial = serial.Serial('COM3', 9600)

   while True:
       if bluetooth_serial.in_waiting > 0:
           data = bluetooth_serial.readline().decode('utf-8').strip()
           print(f"Received: {data}")

           # Send data to the website
           url = "http://your-website.com/data"
           payload = {"sensor_value": data}
           headers = {'Content-Type': 'application/x-www-form-urlencoded'}

           response = requests.post(url, data=payload, headers=headers)
           print(f"Response: {response.text}")
