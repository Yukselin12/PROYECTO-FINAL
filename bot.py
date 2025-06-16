import requests

url = "https://api.frankfurter.dev/v1/2000-01-04?symbols=GBP"
response = requests.get(url)

print(response.json())