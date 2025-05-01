# app/models/course.py
from pydantic import BaseModel

class Course(BaseModel):
    id: int
    name: str
    description: str
    price: float
