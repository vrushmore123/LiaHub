from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb://localhost:27017"  # Update if needed
client = AsyncIOMotorClient(MONGO_URL)

db = client.liahub  # database name
