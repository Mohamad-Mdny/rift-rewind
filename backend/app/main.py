import requests
from environment_variables import API_KEY
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#  frontend calls backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Ign = 'Spauw'
Tagline = 'SRY'

def get_PUUID(Ign=None, Tag=None):
    Link = f'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{Ign}/{Tag}?api_key={API_KEY}'
    response = requests.get(Link)
    return response.json()['puuid']

@app.get("/puuid/{Ign}/{Tag}")
def PUUID(Ign: str, Tag: str):
    return {"puuid": get_PUUID(Ign, Tag)}


@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI!"}
